"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { Button } from "./ui/button";
import { AppointmentForm } from "./forms/AppointmentForm";
import { Appointment } from "@/types/appwrite.types";

const AppointmentModal = ({
  type,
  patientdId,
  userId,
  appointmentId,
}: {
  type: "schedule" | "cancel";
  patientdId: string;
  userId: string;
  appointmentId?: Appointment;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className={`capitalize ${type === "schedule" && "text-reen-500"}`}
          >
            {type}
          </Button>
        </DialogTrigger>
        <DialogContent className="shad-dialog sm:max-w-md">
          <DialogHeader mb-4 space-y-3>
            <DialogTitle className="capitalize">{type} Appointment</DialogTitle>
            <DialogDescription>
              Please fill in the following details to {type} an appointmennt
            </DialogDescription>
          </DialogHeader>

          <AppointmentForm
            userId={userId}
            patientId={patientdId}
            type={type}
            appointment={appointmentId}
            setOpen={setOpen}
          />
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppointmentModal;
