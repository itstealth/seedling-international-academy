import { copyLeadToCms } from "@/lib/cms-lead-client";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxQxDh9kDCYD-SWIS_JIXYGtSf3F9Id8lESGKrqT9GJ4NT9fuqh63Gu1BW6lhYITjMR/exec";

export interface EnquiryFormData {
  parentName: string
  candidateName: string
  phone: string
  className: string
  gender: string
  message: string
}

export async function submitEnquiryForm(data: EnquiryFormData): Promise<void> {
  // Copy for the CMS lead inbox. Fire-and-forget: the Google Sheet submission
  // below runs exactly as before whatever happens to this.
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  copyLeadToCms({
    formType: path.startsWith("/admissions") ? "admission-enquiry" : path.startsWith("/contact") ? "contact" : "enquiry",
    formName: formNameForPath(path),
    name: data.parentName,
    phone: data.phone,
    studentName: data.candidateName,
    className: data.className,
    message: data.message,
    details: data.gender ? { gender: data.gender } : {},
  });

  const body = new URLSearchParams({
    name: data.candidateName,
    class_name: data.className,
    parent_name: data.parentName,
    email: "",
    phone: data.phone,
    student_name: data.candidateName,
    school: data.gender,
    message: data.message,
  });

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
}

export function validatePhone(phone: string): string | null {
  if (!phone) return "Mobile number is required"
  if (phone.length !== 10) return "Enter 10-digit mobile number"
  if (!/^[6-9]/.test(phone)) return "Must start with 6, 7, 8, or 9"
  return null
}

export function validateEnquiryForm(data: EnquiryFormData): Record<string, string> {
  const errors: Record<string, string> = {}
  if (!data.parentName.trim()) errors.parentName = "Parent name is required"
  if (!data.candidateName.trim()) errors.candidateName = "Student name is required"
  if (!data.className) errors.className = "Please select a grade"
  if (!data.gender) errors.gender = "Please select gender"
  const phoneError = validatePhone(data.phone)
  if (phoneError) errors.phone = phoneError
  if (!data.message.trim()) errors.message = "Please enter a message"
  return errors
}

function formNameForPath(pathname: string): string {
  const first = pathname.split("/").filter(Boolean)[0];
  if (!first) return "Home page";
  const words = first.replace(/[-_]+/g, " ");
  return `${words.charAt(0).toUpperCase()}${words.slice(1)} page`;
}
