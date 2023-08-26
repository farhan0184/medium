import BlogNavbar from "@/components/blognavbar";

export default function BlogLayout({ children }) {

    return <section>
        {/* navbar */}
        <BlogNavbar />
        {children}
    </section>
  }