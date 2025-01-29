import { Badge } from "@/components/ui/badge";
import { Briefcase } from 'lucide-react';

export function JobStatusBadge() {
  return (
    <Badge 
      variant="secondary" 
      className="bg-emerald-100 hover:bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100 text-xs sm:text-sm whitespace-nowrap flex items-center gap-2"
    > 
      <Briefcase className="w-4 h-4" />     
      Looking for job
      
    </Badge>
  );
}