"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star } from "lucide-react";
import type { Benefit } from "@/types";

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
          <div className="flex items-center gap-2">
            <span className="text-purple-500">⚡</span>
            <h3 className="font-semibold text-lg">{benefit.name}</h3>
          </div>
          
          {/* Star Button */}
          <button className="absolute top-4 left-4 text-gray-400 hover:text-gray-600">
            <Star className="w-5 h-5" />
          </button>

          {/* Description */}
          <div className="border border-dashed border-blue-200 rounded-lg p-4 bg-blue-50/50">
            <p className="text-sm text-gray-700">{benefit.shortDescription}</p>
          </div>

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
        <DialogContent className="sm:max-w-[600px] p-6">
          <DialogHeader className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-purple-500 text-xl">⚡</span>
              <DialogTitle className="text-2xl font-semibold">{benefit.name}</DialogTitle>
            </div>
          </DialogHeader>

          <div className="space-y-8 mt-6">
            <div className="border border-dashed border-blue-200 rounded-lg p-6 bg-blue-50/50">
              <p className="text-base leading-relaxed text-gray-700">{benefit.longDescription}</p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                size="lg"
                className="flex-1 text-base py-6" 
                onClick={() => window.open(benefit.actionUrl, '_blank')}
              >
                Get perk
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                className="flex-1 text-base py-6"
              >
                Get help
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 