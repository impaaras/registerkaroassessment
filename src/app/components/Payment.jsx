import { FileText, CreditCard, UserCheck, Mail } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Fill up Application Form",
    color: "bg-[#eb5757]",
  },
  {
    icon: CreditCard,
    title: "Make Online Payment",
    color: "bg-[#26AD60]",
  },
  {
    icon: UserCheck,
    title: "Executive will Process Application",
    color: "bg-[#F2994A]",
  },
  {
    icon: Mail,
    title: "Get Confirm Mail",
    color: "bg-[#828282]",
  },
];

export function Payment() {
  return (
    <section className="bg-[#FFA229] py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`${step.color} p-3 rounded-full`}>
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium">{step.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
