import { Group, Input } from "../subcomponents/formclasses";

const Form = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[linear-gradient(to_right,var(--color-neutral-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-800)_1px,transparent_1px)] bg-size-[40px_40px]">
      <div className="h-[100%] w-[60%] bg-neutral-100">
        <div className="flex h-1/3 flex-col items-center justify-center">
          <div className="relative text-5xl font-bold tracking-tight">
            This form is fucking{" "}
            <div className="relative z-10 inline-block after:absolute after:inset-0 after:-z-10 after:h-full after:w-full after:skew-y-3 after:bg-green-400 after:content-['']">
              crazy
            </div>
            .
          </div>
        </div>
        <div className="h-2/3 flex-col bg-neutral-100">
          <form>
            <div className="flex flex-col items-center justify-center gap-3 p-4">
              <Group>
                {" "}
                <label className="after:content-['*']">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  required
                />
              </Group>{" "}
              <Group>
                {" "}
                <label className="after:content-['*']">name</label>
                <Input
                  type="name"
                  name="name"
                  placeholder="enter your email"
                  required
                />
              </Group>{" "}
              <Group>
                {" "}
                <label className="after:content-['*']">Company</label>
                <Input
                  type="company"
                  name="company"
                  placeholder="enter your company"
                  required
                />
              </Group>{" "}
              <Group>
                {" "}
                <label className="after:content-['*']">message</label>
                <Input
                  type="message"
                  name="message"
                  placeholder="enter your message"
                  required
                />
              </Group>{" "}
              <button
                type="submit"
                className="relative m-auto w-[300px] cursor-pointer overflow-hidden rounded-lg bg-neutral-800 px-4 py-2 text-center text-neutral-200 transition duration-200 ease-in-out after:absolute after:-top-20 after:-left-20 after:h-[400px] after:w-1/2 after:rotate-z-20 after:bg-neutral-600 after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:-translate-y-1 hover:bg-neutral-500 hover:after:translate-x-[175%] active:scale-98"
              >
                {" "}
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form;
