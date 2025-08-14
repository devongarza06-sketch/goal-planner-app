// script.js

// Utility to update budget sliders display
function initBudgets() {
  const ids = ['passion', 'person', 'play', 'misc'];
  ids.forEach((id) => {
    const range = document.getElementById(`${id}-range`);
    const valueEl = document.querySelector(`#budget-${id} .value`);
    const update = () => {
      valueEl.textContent = `${range.value}%`;
    };
    range.addEventListener('input', update);
    update();
  });
}

// Sample data for passion
const passionDirections = [
  {
    id: 'crna',
    title: 'Become a CRNA',
    vision: {
      legacy: {
        statement: 'Respected nurse anesthetist providing safe, compassionate care',
        values: ['Service', 'Mastery', 'Empathy']
      },
      personal: {
        statement: 'Achieve autonomy and expertise in anesthesia to impact lives',
        values: ['Independence', 'Growth', 'Impact']
      }
    },
    tree: {
      name: 'Become a CRNA',
      details: {
        smartier: 'Pass the NBCRNA exam and start first CRNA position by Aug 2028',
        lead: 'Study 15 hrs/week, shadow CRNAs',
        lag: 'NBCRNA pass, job offer'
      },
      children: [
        {
          name: 'Complete prerequisites',
          details: {
            smartier: 'Finish required courses and clinical hours within 12 months',
            lead: 'Enroll courses, log hours/week',
            lag: 'Credits earned, hours recorded'
          },
          children: [
            {
              name: 'Anatomy course',
              details: {
                smartier: 'Achieve A grade in anatomy by Dec 2025',
                lead: 'Study 5 hr/week, review notes',
                lag: 'Exam grade'
              },
              children: []
            },
            {
              name: '150 clinical hours',
              details: {
                smartier: 'Complete 150 hours by Mar 2026',
                lead: 'Schedule 10 hr/week shifts',
                lag: 'Hours logged'
              },
              children: []
            }
          ]
        },
        {
          name: 'Apply to CRNA programs',
          details: {
            smartier: 'Submit 5 applications by Sep 2026',
            lead: 'Write essays, gather letters',
            lag: 'Applications submitted'
          },
          children: []
        }
      ]
    }
  },
  {
    id: 'writer',
    title: 'Become a Writer',
    vision: {
      legacy: {
        statement: 'Inspire readers through thought‑provoking stories',
        values: ['Creativity', 'Influence', 'Curiosity']
      },
      personal: {
        statement: 'Express my imagination and build a career as an author',
        values: ['Expression', 'Discipline', 'Perseverance']
      }
    },
    tree: {
      name: 'Become a Writer',
      details: {
        smartier: 'Write and publish a sci‑fi novel by Dec 2026',
        lead: 'Write 500 words daily, join writers group',
        lag: 'Draft complete, contract signed'
      },
      children: [
        {
          name: 'Develop story idea',
          details: {
            smartier: 'Outline novel plot and characters by Jan 2026',
            lead: 'Outline 3 chapters/week',
            lag: 'Completed outline'
          },
          children: []
        },
        {
          name: 'Write first draft',
          details: {
            smartier: 'Draft 80k words by Jun 2026',
            lead: 'Write 1k words/day',
            lag: 'Draft wordcount'
          },
          children: []
        }
      ]
    }
  }
];

// Sample data for person sections
const personSections = [
  {
    id: 'physical',
    title: 'Physical',
    directions: [
      {
        id: 'fitbody',
        title: 'Build a strong body',
        vision: {
          legacy: { statement: 'Be known as fit and energetic', values: ['Health', 'Strength'] },
          personal: { statement: 'Feel confident and energetic daily', values: ['Vitality', 'Confidence'] }
        },
        tree: {
          name: 'Build a strong body',
          details: { smartier: 'Run a 5k under 30 min and lift 100kg deadlift by May 2026', lead: 'Train 4x/week, follow program', lag: 'Time and weight records' },
          children: [
            { name: 'Run training', details: { smartier: 'Complete couch‑to‑5k by Feb 2026', lead: 'Run 3x/week', lag: 'Distances run' }, children: [] },
            { name: 'Strength training', details: { smartier: 'Increase deadlift to 100kg by May 2026', lead: 'Lift 2x/week', lag: 'Max weight' }, children: [] }
          ]
        }
      }
    ]
  },
  {
    id: 'cognitive',
    title: 'Cognitive',
    directions: [
      {
        id: 'learnai',
        title: 'Deepen AI knowledge',
        vision: {
          legacy: { statement: 'Be recognized as an AI expert', values: ['Expertise', 'Innovation'] },
          personal: { statement: 'Expand my mind and solve complex problems', values: ['Curiosity', 'Growth'] }
        },
        tree: {
          name: 'Deepen AI knowledge',
          details: { smartier: 'Complete advanced ML course by Jul 2026', lead: 'Study 3 hr/week, build projects', lag: 'Course completion' },
          children: [
            { name: 'ML theory', details: { smartier: 'Finish 12 modules by Apr 2026', lead: '1 module/week', lag: 'Completed modules' }, children: [] },
            { name: 'Capstone project', details: { smartier: 'Build ML model demo by Jun 2026', lead: 'Code 2 hr/week', lag: 'Project deployed' }, children: [] }
          ]
        }
      }
    ]
  },
  {
    id: 'emotional',
    title: 'Emotional',
    directions: [
      {
        id: 'mindfulness',
        title: 'Practice mindfulness',
        vision: {
          legacy: { statement: 'Calm and centred presence influences others', values: ['Peace', 'Composure'] },
          personal: { statement: 'Maintain emotional balance through meditation', values: ['Presence', 'Serenity'] }
        },
        tree: {
          name: 'Practice mindfulness',
          details: { smartier: 'Meditate 10 min daily for 3 months', lead: 'Meditate daily', lag: 'Streak days' },
          children: [
            { name: 'Morning meditation', details: { smartier: 'Meditate 5 min each morning', lead: 'Use guided app', lag: 'Sessions logged' }, children: [] },
            { name: 'Evening gratitude', details: { smartier: 'Write 3 things nightly', lead: 'Journal before bed', lag: 'Entries' }, children: [] }
          ]
        }
      }
    ]
  },
  {
    id: 'social',
    title: 'Social',
    directions: [
      {
        id: 'buildcommunity',
        title: 'Build supportive circle',
        vision: {
          legacy: { statement: 'Create a close-knit community', values: ['Connection', 'Support'] },
          personal: { statement: 'Feel connected and valued', values: ['Belonging', 'Joy'] }
        },
        tree: {
          name: 'Build supportive circle',
          details: { smartier: 'Host a monthly meetup for 6 months', lead: 'Plan event, invite friends', lag: 'Meetups hosted' },
          children: [
            { name: 'Organize meetups', details: { smartier: 'Plan 6 themed meetups by Jul 2026', lead: 'Brainstorm topics', lag: 'Events scheduled' }, children: [] },
            { name: 'One-on-one check-ins', details: { smartier: 'Have a chat with friend weekly', lead: 'Reach out Monday', lag: 'Chats logged' }, children: [] }
          ]
        }
      }
    ]
  },
  {
    id: 'meaning',
    title: 'Meaning & Spiritual',
    directions: [
      {
        id: 'giveback',
        title: 'Cultivate meaning',
        vision: {
          legacy: { statement: 'Make a difference in my community', values: ['Contribution', 'Purpose'] },
          personal: { statement: 'Align actions with deeper purpose', values: ['Faith', 'Reflection'] }
        },
        tree: {
          name: 'Cultivate meaning',
          details: { smartier: 'Volunteer 4 hrs/month and reflect weekly', lead: 'Sign up for volunteering, journal reflections', lag: 'Hours contributed' },
          children: [
            { name: 'Volunteer work', details: { smartier: 'Volunteer at shelter monthly', lead: 'Schedule session', lag: 'Sessions done' }, children: [] },
            { name: 'Weekly reflection', details: { smartier: 'Journal purpose reflections weekly', lead: 'Sunday evening reflection', lag: 'Journal entries' }, children: [] }
          ]
        }
      }
    ]
  }
];

// Sample data for play skill directions
const playSkillDirections = [
  {
    id: 'guitar',
    title: 'Master guitar basics',
    vision: {
      legacy: { statement: 'Play beautiful songs for friends', values: ['Joy', 'Creativity'] },
      personal: { statement: 'Enjoy music and improve dexterity', values: ['Fun', 'Persistence'] }
    },
    tree: {
      name: 'Master guitar basics',
      details: { smartier: 'Learn 5 songs by Nov 2025', lead: 'Practice 30 min/day', lag: 'Songs learned' },
      children: [
        { name: 'Chord practice', details: { smartier: 'Memorize 10 chords by Oct 2025', lead: 'Practice chords daily', lag: 'Chords mastered' }, children: [] },
        { name: 'Song repertoire', details: { smartier: 'Learn 3 songs by Nov 2025', lead: 'Learn 1 song every 3 weeks', lag: 'Songs learned' }, children: [] }
      ]
    }
  },
  {
    id: 'painting',
    title: 'Learn digital painting',
    vision: {
      legacy: { statement: 'Create art that evokes emotion', values: ['Beauty', 'Expression'] },
      personal: { statement: 'Develop painting skills and creativity', values: ['Creativity', 'Patience'] }
    },
    tree: {
      name: 'Learn digital painting',
      details: { smartier: 'Create 4 finished artworks by Dec 2025', lead: 'Practice 2 hr/week, take online class', lag: 'Art pieces completed' },
      children: [
        { name: 'Color theory', details: { smartier: 'Study color concepts by Jul 2025', lead: 'Watch tutorials', lag: 'Notes taken' }, children: [] },
        { name: 'Portrait practice', details: { smartier: 'Paint 10 portraits by Nov 2025', lead: 'Practice weekly', lag: 'Portraits painted' }, children: [] }
      ]
    }
  }
];

// Render tree recursively
function renderTree(node) {
  // Create container <li>
  const li = document.createElement('li');
  // Node label
  const label = document.createElement('div');
  label.className = 'node';
  label.textContent = node.name;
  // Details section
  const details = document.createElement('div');
  details.className = 'details';
  details.innerHTML = `<strong>SMARTIER:</strong> ${node.details.smartier}<br><strong>Lead:</strong> ${node.details.lead}<br><strong>Lag:</strong> ${node.details.lag}`;
  // Toggle details on click
  label.addEventListener('click', () => {
    label.classList.toggle('active');
    // When toggled open, ensure details visible; CSS handles display
  });
  li.appendChild(label);
  li.appendChild(details);
  // Children
  if (node.children && node.children.length > 0) {
    const ul = document.createElement('ul');
    node.children.forEach((child) => {
      ul.appendChild(renderTree(child));
    });
    li.appendChild(ul);
  }
  return li;
}

// Render passion directions list
function renderPassionDirections() {
  const listEl = document.getElementById('passion-directions');
  passionDirections.forEach((dir, index) => {
    const btn = document.createElement('button');
    btn.textContent = dir.title;
    btn.dataset.id = dir.id;
    if (index === 0) btn.classList.add('active');
    btn.addEventListener('click', () => {
      // set active state
      listEl.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderPassionDetails(dir);
    });
    listEl.appendChild(btn);
  });
  // render first by default
  renderPassionDetails(passionDirections[0]);
}

// Render passion details (vision board + tree)
function renderPassionDetails(dir) {
  const container = document.getElementById('passion-details');
  container.innerHTML = '';
  // Vision boards
  const visionBoard = document.createElement('div');
  visionBoard.className = 'vision-board';
  const legacy = document.createElement('div');
  legacy.className = 'vision';
  legacy.innerHTML = `<h4>Legacy Vision</h4><p>${dir.vision.legacy.statement}</p><div class="values">Values: ${dir.vision.legacy.values.join(', ')}</div>`;
  const personal = document.createElement('div');
  personal.className = 'vision';
  personal.innerHTML = `<h4>Personal Vision</h4><p>${dir.vision.personal.statement}</p><div class="values">Values: ${dir.vision.personal.values.join(', ')}</div>`;
  visionBoard.appendChild(legacy);
  visionBoard.appendChild(personal);
  container.appendChild(visionBoard);
  // Tree
  const treeContainer = document.createElement('div');
  treeContainer.className = 'tree';
  const ul = document.createElement('ul');
  ul.appendChild(renderTree(dir.tree));
  treeContainer.appendChild(ul);
  container.appendChild(treeContainer);
}

// Render person sections
function renderPersonSections() {
  const personEl = document.getElementById('person');
  personSections.forEach((section) => {
    const secEl = document.createElement('div');
    secEl.className = 'person-section';
    // Direction list for this section appears at the very top
    const dirList = document.createElement('div');
    dirList.className = 'direction-list';
    secEl.appendChild(dirList);
    // Section header
    const header = document.createElement('h3');
    header.textContent = section.title;
    secEl.appendChild(header);
    // Details area
    const detailArea = document.createElement('div');
    secEl.appendChild(detailArea);
    // Add directions
    section.directions.forEach((dir, index) => {
      const btn = document.createElement('button');
      btn.textContent = dir.title;
      btn.dataset.id = dir.id;
      if (index === 0) btn.classList.add('active');
      btn.addEventListener('click', () => {
        dirList.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderPersonDetails(detailArea, dir);
      });
      dirList.appendChild(btn);
    });
    // Render first details by default
    renderPersonDetails(detailArea, section.directions[0]);
    // Append section to person container
    personEl.appendChild(secEl);
  });
}

// Render person direction details
function renderPersonDetails(container, dir) {
  container.innerHTML = '';
  // Vision board
  const visionBoard = document.createElement('div');
  visionBoard.className = 'vision-board';
  const legacy = document.createElement('div');
  legacy.className = 'vision';
  legacy.innerHTML = `<h4>Legacy Vision</h4><p>${dir.vision.legacy.statement}</p><div class="values">Values: ${dir.vision.legacy.values.join(', ')}</div>`;
  const personal = document.createElement('div');
  personal.className = 'vision';
  personal.innerHTML = `<h4>Personal Vision</h4><p>${dir.vision.personal.statement}</p><div class="values">Values: ${dir.vision.personal.values.join(', ')}</div>`;
  visionBoard.appendChild(legacy);
  visionBoard.appendChild(personal);
  container.appendChild(visionBoard);
  // Tree
  const treeContainer = document.createElement('div');
  treeContainer.className = 'tree';
  const ul = document.createElement('ul');
  ul.appendChild(renderTree(dir.tree));
  treeContainer.appendChild(ul);
  container.appendChild(treeContainer);

  // Append static AID board for person goals
  const board = document.createElement('div');
  board.className = 'aid-board';
  board.innerHTML = `
    <h3>1–3 Month Goals</h3>
    <div class="aid-columns">
      <div class="aid-col">
        <h4>Active</h4>
        <ul>
          <li>Goal A (4.5)</li>
        </ul>
      </div>
      <div class="aid-col">
        <h4>Incubating</h4>
        <ul>
          <li>Goal B (3.8)</li>
          <li>Goal C (3.6)</li>
        </ul>
      </div>
      <div class="aid-col">
        <h4>Dormant</h4>
        <ul>
          <li>Goal D (2.9)</li>
          <li>Goal E (2.5)</li>
        </ul>
      </div>
    </div>`;
  container.appendChild(board);
  // Append static selected goal
  const selected = document.createElement('div');
  selected.className = 'selected-goals';
  selected.innerHTML = `
    <h3>Selected Active Goal</h3>
    <div class="goal">
      <h4>${dir.title} milestone</h4>
      <p><strong>Frequency:</strong> 3x/week&nbsp;&nbsp;<strong>Duration:</strong> 30&nbsp;min</p>
      <p><strong>If‑Then:</strong> If session missed → reschedule within 24h.</p>
      <p><strong>Rationale:</strong> Step toward personal vision.</p>
    </div>`;
  container.appendChild(selected);
}

// Render play skill directions
function renderPlaySkillDirections() {
  const listEl = document.getElementById('play-skill-directions');
  playSkillDirections.forEach((dir, index) => {
    const btn = document.createElement('button');
    btn.textContent = dir.title;
    btn.dataset.id = dir.id;
    if (index === 0) btn.classList.add('active');
    btn.addEventListener('click', () => {
      listEl.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderPlaySkillDetails(dir);
    });
    listEl.appendChild(btn);
  });
  // Render first by default
  renderPlaySkillDetails(playSkillDirections[0]);
}

function renderPlaySkillDetails(dir) {
  const container = document.getElementById('play-skill-details');
  container.innerHTML = '';
  // Vision board
  const visionBoard = document.createElement('div');
  visionBoard.className = 'vision-board';
  const legacy = document.createElement('div');
  legacy.className = 'vision';
  legacy.innerHTML = `<h4>Legacy Vision</h4><p>${dir.vision.legacy.statement}</p><div class="values">Values: ${dir.vision.legacy.values.join(', ')}</div>`;
  const personal = document.createElement('div');
  personal.className = 'vision';
  personal.innerHTML = `<h4>Personal Vision</h4><p>${dir.vision.personal.statement}</p><div class="values">Values: ${dir.vision.personal.values.join(', ')}</div>`;
  visionBoard.appendChild(legacy);
  visionBoard.appendChild(personal);
  container.appendChild(visionBoard);
  // Tree
  const treeContainer = document.createElement('div');
  treeContainer.className = 'tree';
  const ul = document.createElement('ul');
  ul.appendChild(renderTree(dir.tree));
  treeContainer.appendChild(ul);
  container.appendChild(treeContainer);

  // Append static AID board for play skill goals
  const board = document.createElement('div');
  board.className = 'aid-board';
  board.innerHTML = `
    <h3>1–3 Month Goals</h3>
    <div class="aid-columns">
      <div class="aid-col">
        <h4>Active</h4>
        <ul>
          <li>Practice basics (4.3)</li>
        </ul>
      </div>
      <div class="aid-col">
        <h4>Incubating</h4>
        <ul>
          <li>Improv drills (3.5)</li>
          <li>Ear training (3.3)</li>
        </ul>
      </div>
      <div class="aid-col">
        <h4>Dormant</h4>
        <ul>
          <li>Choir season (2.5)</li>
        </ul>
      </div>
    </div>`;
  container.appendChild(board);
  // Append static selected goal
  const selected = document.createElement('div');
  selected.className = 'selected-goals';
  selected.innerHTML = `
    <h3>Selected Active Goal</h3>
    <div class="goal">
      <h4>${dir.title} session</h4>
      <p><strong>Frequency:</strong> 4x/week&nbsp;&nbsp;<strong>Duration:</strong> 45&nbsp;min</p>
      <p><strong>If‑Then:</strong> If rehearsal skipped → play 15 min later.</p>
      <p><strong>Rationale:</strong> Builds competency for showcase.</p>
    </div>`;
  container.appendChild(selected);
}

// Tab switching
function initTabs() {
  const tabs = document.querySelectorAll('.tabs button');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.target;
      document.querySelectorAll('section').forEach((sec) => {
        sec.classList.remove('active');
      });
      document.getElementById(target).classList.add('active');
    });
  });
}

// Initialize application
function init() {
  initBudgets();
  initTabs();
  renderPassionDirections();
  renderPersonSections();
  renderPlaySkillDirections();
}

document.addEventListener('DOMContentLoaded', init);