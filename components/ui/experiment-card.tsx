"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin } from "lucide-react";
import type { Experiment } from "@/types";

interface ExperimentCardProps {
  experiment: Experiment;
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="relative overflow-hidden group cursor-pointer border-2 bg-white hover:border-blue-100 transition-all"
            onClick={() => setIsModalOpen(true)}>
        <div className="p-6 space-y-4">
          {/* Header with Status */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">{experiment.name}</h3>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                {experiment.location}
              </div>
            </div>
            <Badge className="shrink-0">{experiment.status}</Badge>
          </div>

          {/* TLDR */}
          <div className="border border-dashed border-blue-200 rounded-lg p-4 bg-blue-50/50">
            <p className="text-sm text-gray-700">{experiment.tldr}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {experiment.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-2">
            <Button
              variant="secondary"
              className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600"
            >
              View details
            </Button>
          </div>
        </div>
      </Card>

      {/* Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] flex flex-col p-0">
          <DialogHeader className="p-6 border-b">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <DialogTitle className="text-2xl font-semibold">{experiment.name}</DialogTitle>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {experiment.location}
                </div>
              </div>
              <Badge className="shrink-0">{experiment.status}</Badge>
            </div>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-8">
              {/* TLDR */}
              <div className="border border-dashed border-blue-200 rounded-lg p-6 bg-blue-50/50">
                <h4 className="font-medium mb-2">TLDR</h4>
                <p className="text-gray-700">{experiment.tldr}</p>
              </div>

              {/* Full Description */}
              <div className="space-y-2">
                <h4 className="font-medium">Description</h4>
                <p className="text-gray-700 leading-relaxed">{experiment.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {experiment.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Retro Article - Fixed at bottom */}
          {experiment.retroArticle && (
            <div className="border-t p-6 bg-white">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(experiment.retroArticle?.url, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Read Retrospective: {experiment.retroArticle.title}
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
} 