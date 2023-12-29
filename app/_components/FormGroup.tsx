import { useTranslations } from "next-intl";

export default function FormGroup({ title, children }: { title: string, children: React.ReactNode }) {  
  const t = useTranslations('BUILDER');
  return (
    <div className="flex flex-col gap-2">
        <div className="divider" />
        <h2 className="text-2xl mb-4">{t(title)}</h2>
        {children}
    </div>
  );
}
