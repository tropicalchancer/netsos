import { allConfigs } from "@/lib/auth";
import { authenticate } from "@pcd/zuauth/server";
import { NextRequest } from "next/server";
// @ts-expect-error ffjavascript does not have types
import { getCurveFromName } from "ffjavascript";

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

  // @ts-expect-error ffjavascript does not have types
  if (!globalThis.curve_bn128) {
    // @ts-expect-error ffjavascript does not have types
    globalThis.curve_bn128 = getCurveFromName("bn128", {
      singleThread: true,
    });
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