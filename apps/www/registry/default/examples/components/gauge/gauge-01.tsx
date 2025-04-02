 
import { Gauge } from '@/components/ui/gauge'; 

export default function Gauge01() { 

  return (
    <main className="flex flex-col items-center gap-6">
      {/* Gauges */}
      <div className="flex gap-6">
        <Gauge size={100} primary={"success"} value={68} />
         
      </div>
 
    </main>
  );
}