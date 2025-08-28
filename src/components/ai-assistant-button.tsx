"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { Wand2, Loader2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getPortfolioSuggestions, type FormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

const initialState: FormState = {};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Get Suggestions
        </>
      )}
    </Button>
  );
}

export function AiAssistantButton() {
  const [state, formAction] = useFormState(getPortfolioSuggestions, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.error) {
      toast({
        title: "Error",
        description: state.error,
        variant: "destructive",
      });
    }
    if(state.suggestions) {
      suggestionsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state, toast]);
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      formRef.current?.reset();
      // Reset form state if desired
    }
  }

  return (
    <>
      <Dialog onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-6 right-6 z-50 rounded-full h-16 w-16 shadow-lg animate-bounce"
            aria-label="Get AI Portfolio Suggestions"
          >
            <Wand2 className="h-7 w-7" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>AI Portfolio Assistant</DialogTitle>
            <DialogDescription>
              Paste your current portfolio content (bio, project descriptions, skills) below to get personalized enhancement suggestions based on industry trends.
            </DialogDescription>
          </DialogHeader>
          <form ref={formRef} action={formAction} className="space-y-4">
            <div className="grid w-full gap-2">
              <Label htmlFor="portfolioContent">Your Portfolio Content</Label>
              <Textarea
                id="portfolioContent"
                name="portfolioContent"
                placeholder="e.g., 'A passionate developer with experience in React...'"
                rows={10}
                required
              />
              {state.fieldErrors?.portfolioContent && (
                <p className="text-sm text-destructive">{state.fieldErrors.portfolioContent[0]}</p>
              )}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <SubmitButton />
            </DialogFooter>
          </form>

          {state.suggestions && (
             <div ref={suggestionsRef} className="mt-6 border-t pt-6">
                <h3 className="text-lg font-semibold flex items-center mb-4">
                  <Lightbulb className="mr-2 h-5 w-5 text-yellow-400" />
                  Here are your suggestions:
                </h3>
                <div 
                  className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap text-card-foreground bg-secondary p-4 rounded-md"
                  dangerouslySetInnerHTML={{ __html: state.suggestions.replace(/\n/g, '<br />') }}
                />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
