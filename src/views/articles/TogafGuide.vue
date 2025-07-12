<template>
  <ArticleLayout
    title="TOGAF: The Complete Guide to Enterprise Architecture Framework"
    category="IT Frameworks"
    date="2024-01-20"
    :read-time="15"
    meta-description="Master TOGAF framework with our complete guide. Learn implementation, compare with COBIT/ITIL, and discover enterprise architecture best practices."
    :keywords="['TOGAF', 'Enterprise Architecture', 'IT Framework', 'Business Architecture', 'Technology Architecture', 'COBIT', 'ITIL']"
  >
    <template #content>
      <h2>Introduction</h2>
      <p>TOGAF (The Open Group Architecture Framework) stands as one of the most widely adopted enterprise architecture frameworks globally. This comprehensive guide explores its evolution, practical implementation, and how it compares to other prominent frameworks in the IT governance landscape.</p>
      <h2>History & Evolution</h2>
      <h3>Origins and Foundation</h3>
      <p>TOGAF was originally developed by the United States Department of Defense in the 1990s, building upon the Technical Architecture Framework for Information Management (TAFIM). The Open Group acquired and evolved the framework, releasing the first public version in 1995.</p>
      <h3>Key Milestones</h3>
      <ul>
        <li><strong>1995</strong>: TOGAF Version 1.0 released by The Open Group</li>
        <li><strong>2002</strong>: TOGAF 8 introduced the Architecture Development Method (ADM)</li>
        <li><strong>2009</strong>: TOGAF 9 launched with enhanced content metamodel</li>
        <li><strong>2011</strong>: TOGAF 9.1 refined enterprise architecture practices</li>
        <li><strong>2018</strong>: TOGAF 9.2 emphasized digital transformation</li>
        <li><strong>2022</strong>: TOGAF 10 integrated with modern digital practices</li>
      </ul>
      <h2>Core Components & Structure</h2>
      <h3>Architecture Development Method (ADM)</h3>
      <p>The ADM represents TOGAF's central methodology, consisting of eight phases:</p>
      <ol>
        <li><strong>Preliminary Phase</strong>: Framework and principles establishment</li>
        <li><strong>Phase A</strong>: Architecture Vision development</li>
        <li><strong>Phase B</strong>: Business Architecture design</li>
        <li><strong>Phase C</strong>: Information Systems Architecture</li>
        <li><strong>Phase D</strong>: Technology Architecture planning</li>
        <li><strong>Phase E</strong>: Opportunities and Solutions identification</li>
        <li><strong>Phase F</strong>: Migration Planning</li>
        <li><strong>Phase G</strong>: Implementation Governance</li>
        <li><strong>Phase H</strong>: Architecture Change Management</li>
      </ol>
      <!-- More content can be added here -->
    </template>
  </ArticleLayout>
</template>

<script setup lang="ts">
import ArticleLayout from '@/components/ArticleLayout.vue';
</script>

