import { allConfigs } from "@/lib/auth";
import { authenticate } from "@pcd/zuauth/server";
import { NextRequest } from "next/server";


const upper_url = process.env.UPPER_DOOR;

/**
 * Once the front-end has received a PCD from the popup window, it sends it to
 * the back-end for verification.
 *
 * Calling {@link authenticate} will check that the PCD is cryptographically
 * valid and matches our event configuration.
 */
export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body.pcd || !(typeof body.pcd === "string")) {
    console.error(`[ERROR] No PCD specified`);
    return new Response("No PCD specified", { status: 400 });
  }

  try {
    const pcd = await authenticate(body.pcd, {
      watermark: "0",
      externalNullifier: "0",
      config: allConfigs,
      fieldsToReveal: {
        // Must match settings used in `auth-protection.tsx`
        revealAttendeeEmail: true,
        revealAttendeeName: true,
        revealEventId: true,
        revealProductId: true
      }
    });
    console.log('Here we should open the door');
    if (!upper_url) {
      throw new Error("GROUND_DOOR environment variable is not set");
    }
    const response = await fetch(upper_url, {
      method: 'GET',
    });
    console.log('Post message response:', response);
    return Response.json({
      nullifier: pcd.claim.nullifierHash
    });
  } catch (e) {
    console.error(`[ERROR] ${e}`);
    return new Response(
      e instanceof Error ? e.message : "An unexpected error occurred",
      { status: 400 }
    );
  }
}