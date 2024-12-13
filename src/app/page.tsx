import Link from 'next/link'

export default function Home() {
  return (
    <div className="prose-sm prose-a:text-blurple prose-ul:list-disc">
      <h1>Code challenge</h1>

      <h2>Instructions</h2>
      <p>
        This challenge is a test of your ability to build a Next.js or React
        application. You'll be working with modern React patterns, state
        management, data fetching, and UI components. The challenges are
        designed to evaluate your problem-solving skills, code organization, and
        understanding of React best practices. You'll build features like
        product listings, shopping carts, and interactive UI elements that you
        might encounter in real-world applications.
      </p>

      <h2>Rules</h2>

      <p>
        You will be given a set of challenges to complete. Each challenge will
        have a set of requirements that you need to meet.
      </p>

      <p>
        This challenge is built using Next.js and React 19, but you are free to
        implement your solutions using React techniques you prefer - they don't
        need to follow Next.js patterns or conventions. The key is demonstrating
        your React knowledge and problem-solving skills.
      </p>

      <p>
        Feel free to use libraries or tools that you think will help you
        complete the challenges effectively. The use of AI assistants (like
        ChatGPT or GitHub Copilot) is permitted, as long as you can thoroughly
        explain your solution, validate that it works as intended, and elaborate
        on the technical decisions you made. What matters most is your
        understanding of the code and ability to defend your implementation
        choices.
      </p>

      <h2>Evaluation Criteria</h2>

      <p>Your solutions will be evaluated based on several key factors:</p>

      <ul>
        <li>Code quality and organization</li>
        <li>Readability and maintainability of your code</li>
        <li>User experience of interactive elements</li>
        <li>Implementation of proper error handling and loading states</li>
      </ul>

      <p>
        Focus on writing clean, well-structured code while ensuring a smooth and
        intuitive user experience. Consider edge cases and provide appropriate
        feedback to users during interactions.
      </p>

      <p>
        Last but not least, we encourage you to create new components and split
        up existing components into smaller, more manageable pieces. This
        repository is now yours to restructure and organize as you see fit. Good
        component composition is a key aspect of maintainable React
        applications.
      </p>

      <h2>Get started</h2>

      <p>
        Click the links below to get started. Each challenge page contains
        detailed information about the requirements and what you need to
        implement.
      </p>

      <ol className="list-decimal">
        <li>
          <Link href="/challenge-1">Challenge 1 - Product Grid</Link>
        </li>
        <li>
          <Link href="/challenge-2">Challenge 2 - Product Page</Link>
        </li>
      </ol>
    </div>
  )
}
