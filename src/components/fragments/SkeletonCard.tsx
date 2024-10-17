import { Skeleton } from "@/components/ui/skeleton";
import { twMerge } from "tailwind-merge";

interface SkeletonCardProps {
  className?: string;
}
export function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <>
      <Skeleton className={twMerge(className)} />
    </>
  );
}
