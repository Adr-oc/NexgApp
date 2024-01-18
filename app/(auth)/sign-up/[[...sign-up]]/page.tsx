import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 to-teal-800">
      <div className="lg:grid lg:grid-cols-12">
        <div className="mx-auto lg:col-span-6">
          <SignUp />
        </div>
      </div>
    </section>
  );
}
