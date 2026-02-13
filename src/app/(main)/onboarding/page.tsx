/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { ChevronDownIcon, Upload, X, CheckCircle2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [callDate, setCallDate] = useState<Date | undefined>(undefined);
  const [uploadedDocs, setUploadedDocs] = useState<File[]>([]);
  const [uploadedPortfolio, setUploadedPortfolio] = useState<File[]>([]);

  const genderItems = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "docs" | "portfolio"
  ) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      if (type === "docs") {
        setUploadedDocs([...uploadedDocs, ...newFiles]);
      } else {
        setUploadedPortfolio([...uploadedPortfolio, ...newFiles]);
      }
    }
  };

  const removeFile = (index: number, type: "docs" | "portfolio") => {
    if (type === "docs") {
      setUploadedDocs(uploadedDocs.filter((_, i) => i !== index));
    } else {
      setUploadedPortfolio(uploadedPortfolio.filter((_, i) => i !== index));
    }
  };

  const FloatingLabelInput = ({
    label,
    type = "text",
    ...props
  }: {
    label: string;
    type?: string;
  }) => (
    <div className="group relative w-full">
      <label className="origin-start text-muted-foreground group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground has-[+textarea:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:top-0 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium">
        <span className="bg-background inline-flex px-1">{label}</span>
      </label>
      {type === "textarea" ? (
        <Textarea placeholder=" " className="dark:bg-background min-h-20" {...props} />
      ) : (
        <Input type={type} placeholder=" " className="dark:bg-background" {...props} />
      )}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="mt-5">
              <p className="text-muted-foreground text-xs font-medium">1/7</p>
              <p className="text-lg font-semibold">General information</p>
            </div>

            <div className="space-y-6 mt-6">
              <div className="grid lg:grid-cols-2 gap-4">
                <FloatingLabelInput label="First name" />
                <FloatingLabelInput label="Last name" />
              </div>
              <FloatingLabelInput label="Email address" type="email" />
              <FloatingLabelInput label="Phone number" type="tel" />

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full text-muted-foreground justify-between font-normal"
                  >
                    {date ? date.toLocaleDateString() : "Date of Birth"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => {
                      setDate(date);
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>

              <fieldset className="w-full space-y-4">
                <RadioGroup className="grid grid-cols-3 gap-2" defaultValue="Male">
                  {genderItems.map((item) => (
                    <label
                      key={item.value}
                      className="border-input has-data-[state=checked]:border-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
                    >
                      <RadioGroupItem
                        value={item.value}
                        className="sr-only after:absolute after:inset-0"
                      />
                      <p className="text-foreground text-sm leading-none font-medium">
                        {item.label}
                      </p>
                    </label>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>
          </>
        );

      case 2:
        return (
          <>
            <div className="mt-5">
              <p className="text-muted-foreground text-xs font-medium">2/7</p>
              <p className="text-lg font-semibold">Business information</p>
            </div>

            <div className="space-y-6 mt-6">
              <FloatingLabelInput label="Business name" />
              <FloatingLabelInput label="Business registration number" />
              <FloatingLabelInput label="Business address" />
              <div className="grid grid-cols-2 gap-4">
                <FloatingLabelInput label="City" />
                <FloatingLabelInput label="Postal code" />
              </div>
              <FloatingLabelInput label="Website (optional)" type="url" />
            </div>
          </>
        );

      case 3:
        return (
          <>
            <div className="mt-5">
              <p className="text-muted-foreground text-xs font-medium">3/7</p>
              <p className="text-lg font-semibold">Upload requirements</p>
              <p className="text-xs text-muted-foreground mt-1">
                Please attach necessary documents for verification
              </p>
            </div>

            <div className="space-y-6 mt-6">
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <Upload className="mx-auto size-8 text-muted-foreground mb-3" />
                <p className="text-sm font-medium mb-1">Upload Documents</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Business permit, DTI/SEC registration, Valid ID, etc.
                </p>
                <Input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload(e, "docs")}
                  className="hidden"
                  id="docs-upload"
                />
                <Button asChild variant="outline" size="sm">
                  <label htmlFor="docs-upload" className="cursor-pointer">
                    Choose Files
                  </label>
                </Button>
              </div>

              {uploadedDocs.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Uploaded Documents:</p>
                  {uploadedDocs.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted rounded-md"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{file.name}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index, "docs")}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        );

      case 4:
        return (
          <>
            <div className="mt-5">
              <p className="text-muted-foreground text-xs font-medium">4/7</p>
              <p className="text-lg font-semibold">Portfolio & work samples</p>
              <p className="text-xs text-muted-foreground mt-1">
                Showcase your previous work and accomplishments
              </p>
            </div>

            <div className="space-y-6 mt-6">
              <FloatingLabelInput label="Brief description of services offered" type="input" />
              <div className="border-2 border-dashed rounded-lg p-6 text-center">
                <Upload className="mx-auto size-8 text-muted-foreground mb-3" />
                <p className="text-sm font-medium mb-1">Upload Portfolio</p>
                <p className="text-xs text-muted-foreground mb-4">
                  Images, PDFs, or links to your work samples
                </p>
                <Input
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={(e) => handleFileUpload(e, "portfolio")}
                  className="hidden"
                  id="portfolio-upload"
                />
                <Button asChild variant="outline" size="sm">
                  <label htmlFor="portfolio-upload" className="cursor-pointer">
                    Choose Files
                  </label>
                </Button>
              </div>

              {uploadedPortfolio.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">Uploaded Files:</p>
                  {uploadedPortfolio.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-muted rounded-md"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{file.name}</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index, "portfolio")}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        );

      case 5:
        return (
          <>
            <div className="mt-5">
              <p className="text-muted-foreground text-xs font-medium">5/7</p>
              <p className="text-lg font-semibold">Agreements</p>
            </div>

            <div className="space-y-6 mt-2">
              <div className="overflow-y-auto">
                <h4 className="font-semibold mb-2 mt-4">Terms & Conditions</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  By registering on Ki-Ro, you agree to the following terms and conditions...
                </p>
                <h4 className="font-semibold mb-2 mt-4">Privacy Policy</h4>
                <p className="text-sm text-muted-foreground">
                  We respect your privacy and are committed to protecting your personal data...
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 border rounded-lg bg-primary/5">
                  <Checkbox id="discount" />
                  <label
                    htmlFor="discount"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <span className="text-primary font-semibold">Important:</span> I understand
                    and agree that by offering my services through Ki-Ro, I consent to provide
                    discounted rates to clients as per the platform's pricing structure and
                    commission terms.
                  </label>
                </div>
              </div>
            </div>
          </>
        );

      case 6:
        return (
          <>
            <div className="mt-5">
              <p className="text-muted-foreground text-xs font-medium">6/7</p>
              <p className="text-lg font-semibold">Schedule verification call</p>
              <p className="text-xs text-muted-foreground mt-1">
                Choose a convenient time for our team to contact you for verification and further
                discussion
              </p>
            </div>

            <div className="space-y-6 mt-6">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full text-muted-foreground justify-between font-normal"
                  >
                    {callDate ? callDate.toLocaleDateString() : "Select date for call"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={callDate}
                    onSelect={setCallDate}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>

              <div>
                <p className="text-sm font-medium mb-3">Preferred time slot:</p>
                <RadioGroup className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <label
                      key={slot}
                      className="border-input has-data-[state=checked]:border-primary has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex items-center gap-3 rounded-md border px-3 py-2 transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
                    >
                      <RadioGroupItem
                        value={slot}
                        className="after:absolute after:inset-0"
                      />
                      <p className="text-foreground text-sm font-medium">{slot}</p>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              {/* <FloatingLabelInput
                label="Alternative contact number (optional)"
                type="tel"
              />

              <FloatingLabelInput
                label="Additional notes or questions (optional)"
                type="textarea"
              /> */}
            </div>
          </>
        );

      case 7:
        return (
          <>
            <div className="mt-5">
              <p className="text-muted-foreground text-xs font-medium">7/7</p>
              <p className="text-lg font-semibold">Review your details</p>
              <p className="text-xs text-muted-foreground mt-1">
                Please review all information before submitting
              </p>
            </div>

            <div className="space-y-6 mt-6">
              <div className="space-y-4">
                <div className="bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-3">General Information</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-muted-foreground">Name:</span> John Doe
                    </p>
                    <p>
                      <span className="text-muted-foreground">Email:</span> john@example.com
                    </p>
                    <p>
                      <span className="text-muted-foreground">Phone:</span> +63 912 345 6789
                    </p>
                  </div>
                </div>

                <div className="bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-3">Business Information</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-muted-foreground">Business Name:</span> Sample
                      Business Inc.
                    </p>
                    <p>
                      <span className="text-muted-foreground">Industry:</span> Professional
                      Services
                    </p>
                    <p>
                      <span className="text-muted-foreground">Address:</span> 123 Business St.,
                      Manila
                    </p>
                  </div>
                </div>

                <div className="bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-3">Documents Uploaded</h4>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Business Permit
                    </p>
                    <p className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      Valid ID
                    </p>
                  </div>
                </div>

                <div className="bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-3">Verification Call</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-muted-foreground">Date:</span> February 15, 2026
                    </p>
                    <p>
                      <span className="text-muted-foreground">Time:</span> 10:00 AM - 11:00 AM
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 border p-4 rounded-lg bg-primary/5">
                <Checkbox id="confirm" defaultChecked />
                <label
                  htmlFor="confirm"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I confirm that all information provided is accurate and complete
                </label>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-dvh bg-background flex flex-col px-7 pt-7 pb-5">
      <div className="flex items-start gap-5">
        <div className="bg-linear-to-b shrink-0 from-primary to-violet-600 size-8 rounded-full flex items-center justify-center text-white text-sm font-semibold">
          {currentStep}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">
            {currentStep === 7 ? "Review & Submit" : "Provide your information"}
          </h3>
          <p className="text-xs text-muted-foreground">
            {currentStep === 7
              ? "Review all details before final submission"
              : "Enter all the essential information required."}
          </p>
        </div>
      </div>

      <Separator className="my-5" />

      <div className="flex-1 overflow-y-auto">{renderStepContent()}</div>

      <div className="mt-auto pt-6">
        <div className="flex items-center w-full gap-3">
          {currentStep > 1 && (
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </Button>
          )}
          <Button
            className="flex-1"
            onClick={() => {
              if (currentStep < 7) {
                setCurrentStep(currentStep + 1);
              } else {
                // Submit form
                alert("Form submitted!");
              }
            }}
          >
            {currentStep === 7 ? "Submit Application" : "Continue"}
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-5">
          Already have an account?{" "}
          <Link className="text-primary font-medium" href="/sign-in">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
