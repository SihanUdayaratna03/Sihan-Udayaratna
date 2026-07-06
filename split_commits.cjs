const fs = require('fs');
const { execSync } = require('child_process');

try {
  // 1. Reset HEAD and restore working tree to original state
  console.log('Resetting HEAD...');
  // We're already behind by 1 commit now, so no need to reset HEAD~1 again! 
  // Let's just make sure we are at the right commit.
  
  console.log('Checking out original files...');
  execSync('git checkout -- src/components/About.tsx');
  execSync('git checkout -- src/index.css');
  execSync('git checkout -- src/components/Projects.tsx');

  function commit(file, message) {
    console.log(`Committing ${file}: ${message}`);
    execSync(`git add ${file}`);
    execSync(`git commit -m "${message}"`);
  }

  // Commit 1: About.tsx
  let about = fs.readFileSync('src/components/About.tsx', 'utf8');
  about = about.replace(/import \{ BookOpen, Award, GraduationCap \} from 'lucide-react';\r?\n/, "");
  fs.writeFileSync('src/components/About.tsx', about);
  commit('src/components/About.tsx', 'refactor: remove unused lucide icons in About component');

  // Commit 2: index.css
  let css = fs.readFileSync('src/index.css', 'utf8');
  css = css.replace(/\}\r?\n$/, "}\n\n  .project-card {\n    @apply bg-[#080808] border border-white/6 rounded-2xl transition-all duration-500;\n  }\n\n  .tech-badge {\n    @apply inline-block px-3 py-1 rounded-full text-[11px] font-medium border tracking-wide;\n  }\n\n  .achievement-badge {\n    @apply inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide;\n    background-color: rgba(245, 158, 11, 0.1);\n    border: 1px solid rgba(245, 158, 11, 0.3);\n    color: #f59e0b;\n  }\n");
  fs.writeFileSync('src/index.css', css);
  commit('src/index.css', 'style: add custom utility classes for project cards');

  // Now for Projects.tsx
  const chunks = JSON.parse(fs.readFileSync('chunks.json', 'utf8'));
  let p = '';
  const writeP = () => fs.writeFileSync('src/components/Projects.tsx', p);
  const dummyTail = '\n\nconst Projects = () => { return <div>Projects</div>; };\nexport default Projects;\n';
  const dummyTail2 = '\n    </motion.div>\n  );\n};\n\nconst Projects = () => { return <div>Projects</div>; };\nexport default Projects;\n';

  // Commit 3: Imports
  p = chunks.imports + dummyTail;
  writeP();
  commit('src/components/Projects.tsx', 'chore: update imports for new Projects section');

  // Commit 4: Astro AI
  p = chunks.imports + '\n' + chunks.featuredData + dummyTail;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): add Astro AI project data configuration');

  // Commit 5: otherProjects array start
  p = chunks.imports + '\n' + chunks.featuredData + '\n' + chunks.otherProjectsStart + '\n' + chunks.otherProjectsEnd + dummyTail;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): initialize other projects array');

  // Commit 6: TaskLang++
  p = chunks.imports + '\n' + chunks.featuredData + '\n' + chunks.otherProjectsStart + '\n' + chunks.taskLangData + '\n' + chunks.otherProjectsEnd + dummyTail;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): add TaskLang++ compiler project data');

  // Commit 7: OnYx
  p = chunks.imports + '\n' + chunks.featuredData + '\n' + chunks.otherProjectsStart + '\n' + chunks.taskLangData + '\n' + chunks.onyxData + '\n' + chunks.otherProjectsEnd + dummyTail;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): add OnYx smart accounting project data');

  // Commit 8: MediStore
  p = chunks.imports + '\n' + chunks.featuredData + '\n' + chunks.otherProjectsStart + '\n' + chunks.taskLangData + '\n' + chunks.onyxData + '\n' + chunks.medistoreData + '\n' + chunks.otherProjectsEnd + dummyTail;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): add MediStore pharmacy system project data');

  // Commit 9: Pill Dispenser
  p = chunks.imports + '\n' + chunks.featuredData + '\n' + chunks.otherProjectsStart + '\n' + chunks.taskLangData + '\n' + chunks.onyxData + '\n' + chunks.medistoreData + '\n' + chunks.pillData + '\n' + chunks.otherProjectsEnd + dummyTail;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): add Smart Pill Dispenser project data');

  // Base Data
  const baseData = chunks.imports + '\n' + chunks.featuredData + '\n' + chunks.otherProjectsStart + '\n' + chunks.taskLangData + '\n' + chunks.onyxData + '\n' + chunks.medistoreData + '\n' + chunks.pillData + '\n' + chunks.otherProjectsEnd + '\n';

  // Commit 10: TechBadge
  p = baseData + chunks.techBadge + dummyTail;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): create reusable TechBadge component');

  // Commit 11: FeaturedCard 1
  p = baseData + chunks.techBadge + '\n' + chunks.featuredCard1 + dummyTail2;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): create FeaturedCard hero section structure');

  // Commit 12: FeaturedCard 2
  p = baseData + chunks.techBadge + '\n' + chunks.featuredCard1 + '\n' + chunks.featuredCard2 + dummyTail2;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): implement features grid in FeaturedCard');

  // Commit 13: FeaturedCard 3
  p = baseData + chunks.techBadge + '\n' + chunks.featuredCard1 + '\n' + chunks.featuredCard2 + '\n' + chunks.featuredCard3 + dummyTail;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): implement tech stack display in FeaturedCard');

  // Commit 14: ProjectCard 1
  p = baseData + chunks.techBadge + '\n' + chunks.featuredCard1 + '\n' + chunks.featuredCard2 + '\n' + chunks.featuredCard3 + '\n' + chunks.projectCard1 + dummyTail2;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): create standard ProjectCard component structure');

  // Commit 15: ProjectCard 2
  p = baseData + chunks.techBadge + '\n' + chunks.featuredCard1 + '\n' + chunks.featuredCard2 + '\n' + chunks.featuredCard3 + '\n' + chunks.projectCard1 + '\n' + chunks.projectCard2 + dummyTail2;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): implement expandable features in ProjectCard');

  // Commit 16: ProjectCard 3
  p = baseData + chunks.techBadge + '\n' + chunks.featuredCard1 + '\n' + chunks.featuredCard2 + '\n' + chunks.featuredCard3 + '\n' + chunks.projectCard1 + '\n' + chunks.projectCard2 + '\n' + chunks.projectCard3 + dummyTail;
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): add interactive footer and links to ProjectCard');

  // Commit 17: Main Component
  p = baseData + chunks.techBadge + '\n' + chunks.featuredCard1 + '\n' + chunks.featuredCard2 + '\n' + chunks.featuredCard3 + '\n' + chunks.projectCard1 + '\n' + chunks.projectCard2 + '\n' + chunks.projectCard3 + '\n' + chunks.mainComponent1 + '\n' + chunks.mainComponent2 + '\n';
  writeP();
  commit('src/components/Projects.tsx', 'feat(projects): assemble and finalize main Projects portfolio section');

  console.log('Pushing to remote...');
  execSync('git push -f');
  console.log('Done!');
} catch(e) {
  console.error('Error:', e.message);
  if (e.stdout) console.log(e.stdout.toString());
  if (e.stderr) console.error(e.stderr.toString());
}
