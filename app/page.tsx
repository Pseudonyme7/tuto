function TableOfContents() {
  return (
    <ol>
      <li>Components: UI Building Blocks</li>
      <li>Defining a Component</li>
      <li>Using a Component</li>
    </ol>
  );
}

export default function Home() {
  return (
    <main>
      <article>
        <h1>My First Component</h1>
        <TableOfContents />
      </article>
    </main>
  );
}
