import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Label } from "./label";

interface WaitlistDialogProps {
  trigger: React.ReactNode;
  onSubmit?: (email: string) => void;
  dialogContentClassName?: string;
  titleClassName?: string;
}

export function WaitlistDialog({
  trigger,
  onSubmit,
  dialogContentClassName,
  titleClassName,
}: WaitlistDialogProps) {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(email);
    }
    setEmail("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={cn("sm:max-w-md", dialogContentClassName)}>
        <DialogHeader>
          <DialogTitle className={cn("text-2xl font-medium", titleClassName)}>
            Junte-se ao Vision
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="email@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-background border-white/10 h-12 focus-visible:ring-0 focus-visible:border-white/10 focus-visible:outline-none"
          />
          <Button
            size="lg"
            type="submit"
            className="bg-green-light hover:bg-green-light/90 text-black font-medium h-12 w-auto self-end"
          >
            Enviar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
