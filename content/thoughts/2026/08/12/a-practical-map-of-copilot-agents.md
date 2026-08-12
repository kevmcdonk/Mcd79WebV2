---
title: "A practical map of agents in the Copilot space"
date: "12 August 2026"
published: "2026-08-12"
section: "thoughts"
order: 3
excerpt: "Agent Builder, declarative agents, Copilot Studio, and custom engine agents are choices about control, reach, and responsibility—not a ladder everyone must climb."
tags: ["Copilot","Agents","Copilot Studio"]
---
“Agent” has become one of the most overloaded words in the Copilot conversation. It can describe a focused set of instructions and knowledge, a low-code process that takes action, or a custom application with its own model and orchestration.

The useful question is not which type is most advanced. It is which level of control the scenario actually needs.

## Begin with the spectrum

Microsoft’s current extensibility model distinguishes two broad technical approaches: [declarative agents](https://learn.microsoft.com/en-us/microsoft-365-copilot/extensibility/overview-declarative-agent), which use Microsoft 365 Copilot’s managed orchestration, and custom engine agents, where developers control more of the underlying system. Within that spectrum, different creation experiences serve different people and problems.

## Agent Builder: focused help close to the user

Agent Builder is the quickest route for creating a focused agent from Microsoft 365 Copilot. A maker can describe the purpose, add instructions, and connect relevant knowledge. This is well suited to bounded information scenarios: helping a team navigate a set of documents, answering questions about a defined topic, or guiding colleagues through an internal process.

The advantage is proximity. The person who understands the need can create and refine the agent without beginning a software project. The constraint is equally important: simple creation should still be matched with clear ownership, reliable source material, and a decision about who should use it.

## Declarative agents: extend Copilot’s managed foundation

A declarative agent adds specialised instructions, knowledge, and actions while relying on Microsoft 365 Copilot for the model, orchestration, identity, and interaction. It can be built with Copilot Studio or developer tooling, depending on the scenario and team.

This approach is powerful when the experience should remain inside Copilot but needs a clearer role or access to approved business capabilities. It offers more structure than a personal experiment while keeping the managed Copilot foundation.

## Copilot Studio agents: process, action, and governance

Copilot Studio provides a broader low-code environment for building agents that use knowledge, topics, tools, connectors, triggers, and workflows. These agents can support more explicit business processes and can operate across channels.

It is also where the organisational work becomes more visible. Environments, data policies, authentication, publishing, analytics, and lifecycle management matter. The agent is no longer just a useful conversation; it is becoming part of how work gets done.

## Autonomous behaviour: a mode, not a magic category

Some agents can respond to events, run in the background, and complete multi-step work with less immediate human direction. It is tempting to treat autonomy as the goal. It should instead be treated as a risk and design decision.

The more an agent can do without a person confirming each step, the clearer its boundaries, permissions, monitoring, exception handling, and ownership need to be. Autonomy is valuable where the process is understood and the recovery path is safe.

## Custom engine agents: control the whole system

Custom engine agents are for scenarios that require a different model, specialised orchestration, proprietary logic, bespoke interfaces, or integrations that do not fit the managed declarative model. Developers take on greater control—and greater responsibility for security, evaluation, operations, and user experience.

This is not the “best” form of agent. It is the right form when the scenario earns the complexity.

## Choose from the work backwards

Use four questions to choose a route:

-   **Knowledge:** what information must the agent understand, and how reliable is it?
-   **Action:** should it explain, recommend, create, update, or trigger?
-   **Control:** who owns the instructions, permissions, evaluation, and changes?
-   **Consequence:** what happens when it is wrong, unavailable, or used outside its intended boundary?

Start with the least complex agent that can safely deliver the outcome. Prove the value and the operating model together. Complexity should arrive because the work requires it, not because the technology makes it possible.
