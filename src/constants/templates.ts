export const templates = [
    { 
        id: "blank", 
        label: "Blank document", 
        imageUrl: "/templates/blank-document.svg",
        initialContent: ""
    },
    { 
        id: "software-proposal", 
        label: "Software development proposal", 
        imageUrl: "/templates/software-proposal.svg",
        initialContent: `
            <h1 style="text-align: center;">Software Development Proposal</h1>
            <p>Prepared by: <strong>[Your Name]</strong></p>
            <p>Date: <strong>[Insert Date]</strong></p>
            <h2>1. Executive Summary</h2>
            <p>This document outlines the software development proposal for [Project Name]. It includes project objectives, deliverables, timelines, and budget estimates to ensure successful execution.</p>
            <h2>2. Project Objectives</h2>
            <ul>
                <li>Develop a robust software solution to address [specific problem or need].</li>
                <li>Ensure seamless integration with existing systems.</li>
                <li>Deliver a user-friendly interface for optimal user experience.</li>
            </ul>
            <h2>3. Scope of Work</h2>
            <p>The scope of this project includes the following key components:</p>
            <ul>
                <li>Requirement gathering and analysis.</li>
                <li>System architecture and design.</li>
                <li>Development of core features.</li>
                <li>Testing and quality assurance.</li>
                <li>Deployment and maintenance.</li>
            </ul>
            <h2>4. Timeline</h2>
            <p>The project will be completed within <strong>[Insert Duration]</strong> following the timeline below:</p>
            <table>
                <tr><th>Phase</th><th>Duration</th><th>Description</th></tr>
                <tr><td>Planning</td><td>[X weeks]</td><td>Requirement gathering and finalizing specifications.</td></tr>
                <tr><td>Development</td><td>[X weeks]</td><td>Coding and feature implementation.</td></tr>
                <tr><td>Testing</td><td>[X weeks]</td><td>Quality assurance and user acceptance testing.</td></tr>
                <tr><td>Deployment</td><td>[X weeks]</td><td>Launching the software and post-launch support.</td></tr>
            </table>
            <h2>5. Budget</h2>
            <p>The estimated budget for this project is <strong>[Insert Budget]</strong>. Detailed breakdown:</p>
            <ul>
                <li>Development: [X% of budget]</li>
                <li>Testing: [X% of budget]</li>
                <li>Deployment: [X% of budget]</li>
            </ul>
        `
    },
    { 
        id: "project-proposal", 
        label: "Project proposal", 
        imageUrl: "/templates/project-proposal.svg",
        initialContent: `
            <h1 style="text-align: center;">Project Proposal</h1>
            <p><strong>Prepared for:</strong> [Client/Organization Name]</p>
            <p><strong>Prepared by:</strong> [Your Name]</p>
            <p><strong>Date:</strong> [Insert Date]</p>
            <h2>1. Project Background</h2>
            <p>This proposal outlines the [Project Name] initiative, aimed at achieving [key objectives].</p>
            <h2>2. Problem Statement</h2>
            <p>The [Client/Organization Name] is facing challenges such as [describe problem]. This project is designed to address these issues efficiently.</p>
            <h2>3. Objectives</h2>
            <ul>
                <li>To deliver [specific deliverable or goal].</li>
                <li>To improve [specific aspect, e.g., operational efficiency, customer satisfaction, etc.].</li>
                <li>To achieve [specific measurable outcome].</li>
            </ul>
            <h2>4. Implementation Plan</h2>
            <p>Our approach includes:</p>
            <ol>
                <li>Phase 1: [Description of phase].</li>
                <li>Phase 2: [Description of phase].</li>
                <li>Phase 3: [Description of phase].</li>
            </ol>
            <h2>5. Risks and Mitigation</h2>
            <p>Identified risks:</p>
            <ul>
                <li>[Risk 1]: [Mitigation strategy].</li>
                <li>[Risk 2]: [Mitigation strategy].</li>
            </ul>
            <h2>6. Conclusion</h2>
            <p>We believe this project will significantly benefit [Client/Organization Name]. We look forward to your approval and partnership.</p>
        `
    },
    { 
        id: "business-letter", 
        label: "Business letter", 
        imageUrl: "/templates/business-letter.svg",
        initialContent: `
            <p>[Your Name]</p>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Email Address]</p>
            <p>[Phone Number]</p>
            <p>Date: [Insert Date]</p>
            <p>[Recipient's Name]</p>
            <p>[Recipient's Position]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>
            <p>Dear [Recipient's Name],</p>
            <p>We are writing to discuss [specific topic]. Our company, [Your Company Name], has been working on [relevant context].</p>
            <p>The purpose of this letter is to [state purpose clearly]. Please let us know how we can move forward together to achieve these objectives.</p>
            <p>Thank you for your time and consideration. I look forward to your response.</p>
            <p>Sincerely,</p>
            <p>[Your Full Name]</p>
        `
    },
    { 
        id: "resume", 
        label: "Resume", 
        imageUrl: "/templates/resume.svg",
        initialContent: `
            <h1 style="text-align: center;">[Your Name]</h1>
            <p style="text-align: center;">[Your Contact Information]</p>
            <h2>Professional Summary</h2>
            <p>[Provide a compelling summary of your experience and skills relevant to the position you're applying for.]</p>
            <h2>Work Experience</h2>
            <ul>
                <li><strong>[Job Title]</strong> - [Company Name] (<em>[Dates]</em>)</li>
                <ul>
                    <li>[Key responsibility or achievement 1]</li>
                    <li>[Key responsibility or achievement 2]</li>
                </ul>
                <li><strong>[Job Title]</strong> - [Company Name] (<em>[Dates]</em>)</li>
                <ul>
                    <li>[Key responsibility or achievement 1]</li>
                    <li>[Key responsibility or achievement 2]</li>
                </ul>
            </ul>
            <h2>Education</h2>
            <ul>
                <li><strong>[Degree]</strong> - [Institution Name] (<em>[Year]</em>)</li>
            </ul>
            <h2>Skills</h2>
            <ul>
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
            </ul>
        `
    },
    { 
        id: "cover-letter", 
        label: "Cover letter", 
        imageUrl: "/templates/cover-letter.svg",
        initialContent: `
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Date]</p>
            <p>[Recipient's Name]</p>
            <p>[Recipient's Position]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>
            <p>Dear [Recipient's Name],</p>
            <p>I am writing to express my interest in the [specific position] at [Company Name]. With my experience in [relevant field] and my skills in [specific skills], I am confident in my ability to contribute effectively to your team.</p>
            <p>At [Previous Company Name], I successfully [describe significant achievement or responsibility]. My ability to [specific skills or strengths] has enabled me to [specific result].</p>
            <p>I would be thrilled to bring my expertise to [Company Name]. Please feel free to contact me at [Your Phone Number] or via email at [Your Email Address]. Thank you for considering my application.</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    },
    { 
        id: "letter", 
        label: "Letter", 
        imageUrl: "/templates/letter.svg",
        initialContent: `
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Date]</p>
            <p>[Recipient's Name]</p>
            <p>[Recipient's Position]</p>
            <p>[Company Name]</p>
            <p>[Company Address]</p>
            <p>Dear [Recipient's Name],</p>
            <p>This letter is regarding [specific topic]. Our company is committed to [specific goals or context].</p>
            <p>[Expand on the purpose of the letter, providing relevant details and context.]</p>
            <p>Please let us know how we can proceed. I look forward to your feedback and any further discussion.</p>
            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    }
];
