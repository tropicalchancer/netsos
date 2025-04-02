"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Star } from "lucide-react";

interface BenefitCardProps {
  benefit: Benefit;
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="relative overflow-hidden group cursor-pointer border-2 bg-white hover:border-blue-100 transition-all"
            onClick={() => setIsModalOpen(true)}>
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <span className="text-purple-500">⚡</span>
              <h3 className="font-semibold text-lg">{benefit.name}</h3>
            </div>
            {benefit.partnerLogo && (
              <div className="w-12 h-12 rounded-full bg-gray-50 p-2 flex items-center justify-center">
                <Image
                  src={benefit.partnerLogo}
                  alt={benefit.partnerName}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            )}
          </div>
          
          {/* Star Button */}
          <button className="absolute top-4 left-4 text-gray-400 hover:text-gray-600">
            <Star className="w-5 h-5" />
          </button>

          {/* Description */}
          <div className="border border-dashed border-blue-200 rounded-lg p-4 bg-blue-50/50">
            <p className="text-sm text-gray-700">{benefit.shortDescription}</p>
          </div>

          <p className="text-sm text-gray-600">{benefit.description}</p>

          {/* Footer */}
          <div className="pt-4">
            <Button
              variant="secondary"
              className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600"
            >
              View details
            </Button>
            <p className="text-sm text-gray-500 text-center mt-2">
              Follow details to redeem
            </p>
          </div>
        </div>
      </Card>

      {/* Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span className="text-purple-500">⚡</span>
              <span>{benefit.name}</span>
            </DialogTitle>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-purple-500">⚡</span>
              <span>ODF partners</span>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            <div className="border border-dashed border-blue-200 rounded-lg p-4 bg-blue-50/50">
              <p className="text-sm text-gray-700">{benefit.longDescription}</p>
            </div>

            <p className="text-sm text-gray-600">{benefit.description}</p>

            <div className="flex gap-4">
              <Button className="flex-1" onClick={() => window.open(benefit.actionUrl, '_blank')}>
                Get perk
              </Button>
              <Button variant="secondary" className="flex-1">
                Get help
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 