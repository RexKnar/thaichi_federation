import Link from "next/link";
import { ReactElement } from "react";
// GLOBAL CUSTOM COMPONENTS
import NextLink from "../links/NextLink";

// ========================================================
interface BlogCard2Props {
  link: string;
  title: string;
  category: string;
  description: string;
  cardTop: ReactElement;
}
// ========================================================

export default function BlogCard2({ cardTop, title, category, description, link }: BlogCard2Props) {
  return (
    <article className="post">
      <div className="card">
        {cardTop}

        <div className="card-body">
          <div className="post-header">
            <div className="post-category text-line">
              <NextLink title={category} href="/course" className="hover" />
            </div>

            <h2 className="mt-1 mb-0 post-title">
              <NextLink title={title} className="link-dark" href={link} />
            </h2>
          </div>

          <div className="post-content">
            <p>{description}</p>
          </div>
        </div>

      </div>
    </article>
  );
}
