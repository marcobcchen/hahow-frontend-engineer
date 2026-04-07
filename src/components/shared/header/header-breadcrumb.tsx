"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import pathnames from "@/constants/pathnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const HeaderBreadcrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  console.log("pathnames.HEROES.slice(1):", pathnames.HEROES.slice(1));

  return (
    <>
      {segments.length > 0 ? (
        <Separator orientation="vertical" className="mr-4" />
      ) : null}
      <Breadcrumb>
        <BreadcrumbList>
          {segments.map((segment, index) => {
            const href = `/${segments.slice(0, index + 1).join("/")}`;
            const isLast = index === segments.length - 1;

            let label = segment;
            if (href === pathnames.HEROES) {
              label = "Heroes";
            } else {
              label = `Hero ${segment}`;
            }

            return (
              <Fragment key={href}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={href}>{label}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast ? <BreadcrumbSeparator /> : null}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default HeaderBreadcrumb;
