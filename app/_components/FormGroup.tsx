export default function FormGroup({ title, children }: { title: string, children: React.ReactNode }) {  
  return (
    <div className="flex flex-col gap-2">
        <div className="divider" />
        <h2 className="text-2xl mb-4">{title}</h2>
        {children}
    </div>
  );
}
