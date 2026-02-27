import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertBookingRequestSchema } from "@shared/schema";
import { useCreateBooking } from "@/hooks/use-bookings";
import type { BookingInput } from "@shared/routes";
import { BrutalButton } from "@/components/BrutalButton";
import { cn } from "@/lib/utils";

export default function Book() {
  const { mutate: createBooking, isPending } = useCreateBooking();
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<BookingInput>({
    resolver: zodResolver(insertBookingRequestSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      type: "Tattoo",
      description: "",
      size: "",
      placement: "",
      preferredArtist: "Any",
      referenceUrl: "",
      preferredDate: "",
      isAdult: false
    }
  });


  const onSubmit = (data: BookingInput) => {
    setServerError(null);
    createBooking(data, {
      onSuccess: () => setIsSuccess(true),
      onError: (err) => setServerError(err.message)
    });
  };

  const inputClass = "w-full border-4 border-foreground bg-background p-4 font-sans font-bold text-lg focus:outline-none focus:border-accent placeholder:text-muted-foreground transition-colors";
  const labelClass = "block font-display font-bold text-2xl uppercase mb-2 mt-6";
  const errorClass = "text-accent font-sans font-bold mt-2 bg-accent/10 p-2 border-l-4 border-accent";

  if (isSuccess) {
    return (
      <div className="max-w-4xl mx-auto w-full px-4 py-24 text-center">
        <div className="bg-foreground text-background p-12 border-8 border-accent shadow-stamped-white">
          <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
            REQUEST IN.
          </h1>
          <p className="font-sans text-2xl font-bold mb-12">
            WE'LL HIT YOU UP WITHIN 24 HOURS. KEEP YOUR PHONE ON.
          </p>
          <BrutalButton onClick={() => setIsSuccess(false)} variant="secondary">
            SEND ANOTHER
          </BrutalButton>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto w-full px-4 py-16">
      <div className="mb-12 border-b-8 border-foreground pb-6">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
          BOOK YOUR SPOT.
        </h1>
        <p className="font-sans text-2xl font-bold text-muted-foreground">
          FILL OUT THE DETAILS. NO FLAKES.
        </p>
      </div>

      {serverError && (
        <div className="bg-accent text-white p-6 font-bold text-xl uppercase mb-8 border-4 border-foreground shadow-stamped">
          SYSTEM ERROR: {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 pb-20">
        
        {/* TYPE SELECTION - TATTOO ONLY */}
        <div>
          <div className="bg-accent text-white p-6 text-center border-4 border-foreground">
            <div className="font-display font-black text-4xl uppercase">
              TATTOOS & PIERCINGS
            </div>
            <p className="font-sans text-lg font-medium mt-2">PROFESSIONAL ARTISTS & PIERCERS</p>
          </div>
          <input type="hidden" value="Tattoo" {...register("type")} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>NAME</label>
            <input type="text" className={inputClass} placeholder="John Doe" {...register("name")} />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>
          <div>
            <label className={labelClass}>EMAIL</label>
            <input type="email" className={inputClass} placeholder="john@example.com" {...register("email")} />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>PHONE</label>
            <input type="tel" className={inputClass} placeholder="(555) 123-4567" {...register("phone")} />
            {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
          </div>
          <div>
            <label className={labelClass}>PREFERRED ARTIST</label>
            <select className={inputClass} {...register("preferredArtist")}>
              <option value="Any">ANY AVAILABLE</option>
              <option value="Renzo">RENZO</option>
              <option value="Big Head">BIG HEAD</option>
              <option value="J.R">J.R</option>
              <option value="Lopez">LOPEZ</option>
            </select>
            {errors.preferredArtist && <p className={errorClass}>{errors.preferredArtist.message}</p>}
          </div>
        </div>

        <div>
          <label className={labelClass}>IDEA / DESCRIPTION</label>
          <textarea 
            className={cn(inputClass, "min-h-[150px] resize-y")} 
            placeholder="Tell us what you want. Be specific." 
            {...register("description")} 
          />
          {errors.description && <p className={errorClass}>{errors.description.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-muted p-6 border-4 border-foreground">
          <div>
            <label className="block font-display font-bold text-xl uppercase mb-2">SIZE (ESTIMATED)</label>
            <input type="text" className={inputClass} placeholder="e.g. 4x4 inches, Palm size" {...register("size")} />
            {errors.size && <p className={errorClass}>{errors.size.message}</p>}
          </div>
          <div>
            <label className="block font-display font-bold text-xl uppercase mb-2">PLACEMENT ON BODY</label>
            <input type="text" className={inputClass} placeholder="e.g. Left Forearm" {...register("placement")} />
            {errors.placement && <p className={errorClass}>{errors.placement.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className={labelClass}>REFERENCE URL (OPTIONAL)</label>
            <input type="url" className={inputClass} placeholder="Instagram link, Imgur, etc." {...register("referenceUrl")} />
            {errors.referenceUrl && <p className={errorClass}>{errors.referenceUrl.message}</p>}
          </div>
          <div>
            <label className={labelClass}>PREFERRED DATE</label>
            <input type="date" className={inputClass} {...register("preferredDate")} />
            {errors.preferredDate && <p className={errorClass}>{errors.preferredDate.message}</p>}
          </div>
        </div>

        <div className="mt-8 border-4 border-accent p-6 bg-background">
          <label className="flex items-start gap-4 cursor-pointer">
            <input type="checkbox" className="w-8 h-8 mt-1 border-4 border-foreground rounded-none bg-background checked:bg-accent focus:ring-0 cursor-pointer" {...register("isAdult")} />
            <span className="font-display font-bold text-2xl uppercase leading-none">
              I AM 18 OR OLDER.<br/>
              <span className="font-sans text-sm text-muted-foreground block mt-2 normal-case">We check ID at the door. Do not lie.</span>
            </span>
          </label>
          {errors.isAdult && <p className={errorClass}>You must be 18+ to book.</p>}
        </div>

        <BrutalButton type="submit" size="lg" className="w-full text-3xl py-6" disabled={isPending}>
          {isPending ? "SENDING..." : "SUBMIT REQUEST"}
        </BrutalButton>
      </form>
    </div>
  );
}
