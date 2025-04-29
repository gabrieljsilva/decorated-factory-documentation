import Link from 'next/link';
import { ArrowRight, Code, Database, TestTube } from 'lucide-react';
import CodeBlock from "@/components/code-block/code-block";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <div className="inline-block mb-6 p-2 bg-fd-primary/10 rounded-full">
          <div className="bg-fd-primary/20 rounded-full p-2">
            <Code className="w-6 h-6 text-fd-primary" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-fd-primary to-fd-primary/70">
          Decorated Factory
        </h1>
        <p className="text-xl md:text-2xl text-fd-muted-foreground mb-8 max-w-3xl">
          A powerful tool for creating test data with TypeScript decorators
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/docs"
            className="px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-lg font-medium flex items-center justify-center hover:bg-fd-primary/90 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>

        </div>
      </section>

      <section className="w-full bg-fd-muted/30 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Inspiration</h2>
          <p className="text-lg md:text-xl text-fd-muted-foreground mb-12 max-w-3xl mx-auto">
            Decorated Factory was inspired by the way queries are made in PrismaORM, focusing on a clean, 
            declarative API using TypeScript decorators to make generating test data simple and type-safe.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-fd-background p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-fd-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-fd-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Declarative API</h3>
              <p className="text-fd-muted-foreground">
                Use TypeScript decorators to define how to generate data for each field of a class, making your code clean and readable.
              </p>
            </div>

            <div className="bg-fd-background p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-fd-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-fd-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Relationship Support</h3>
              <p className="text-fd-muted-foreground">
                Easily create complex data structures with support for entity relationships, arrays, and key bindings.
              </p>
            </div>

            <div className="bg-fd-background p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-fd-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TestTube className="w-6 h-6 text-fd-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Testing Made Easy</h3>
              <p className="text-fd-muted-foreground">
                Generate realistic test data with minimal effort, making your tests more robust and easier to maintain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="w-full max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Simple & Powerful</h2>
            <p className="text-lg text-fd-muted-foreground mb-6">
              Decorated Factory makes it easy to generate test data with just a few lines of code. 
              Define your models once, and create instances with realistic data whenever you need them.
            </p>
            <Link
              href="/docs/core-concepts/basic-usage"
              className="text-fd-primary font-medium flex items-center hover:underline"
            >
              See more examples
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 bg-fd-muted/30 p-6 rounded-xl overflow-auto">
            <CodeBlock
                language={'typescript'}
                code={`class Product {
  @FactoryField((faker) => faker.number.int())
  id: number;

  @FactoryField((faker) => faker.commerce.productName())
  name: string;
}

const factory = new Factory(faker);
const product = factory.new(Product);

// product = { id: 42, name: "Ergonomic Wooden Chair" }`}
            >

            </CodeBlock>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-fd-primary/10 to-fd-primary/5 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-fd-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore the documentation to learn more about Decorated Factory and how it can help you generate test data for your projects.
          </p>
          <Link
            href="/docs"
            className="px-6 py-3 bg-fd-primary text-fd-primary-foreground rounded-lg font-medium inline-flex items-center hover:bg-fd-primary/90 transition-colors"
          >
            Read the Docs
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
