import { ReactNode } from "react";
interface PrivateLayoutProps {
    children: ReactNode;
}
export default async function HomeLayout({ children }: PrivateLayoutProps) {
  return (
    <div>
        <header>navbar</header>
        <div className="">
            {children}
        </div>
    </div>
  )
}
