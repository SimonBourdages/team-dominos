// ============================================================
// Team Dominos - Character Roster & Employee Data
// ============================================================
// Each character is an ODSP team member who must deliver OKRs
// to Jrod (John Rodrigues) at HQ.
// ============================================================

const CHARACTERS = [
  {
    id: 'sprint-sally',
    name: 'Sprint Sally',
    title: 'Senior PM',
    speed: 5,
    capacity: 2,
    description: 'Fastest on the team. Runs standups in 3 minutes flat.',
    color: '#FF6B6B',
    skinTone: '#F4C7A3',
    hairColor: '#8B4513',
    shirtColor: '#FF6B6B',
    startGridX: 1,
    startGridY: 1,
    okrs: [
      'Ship Q3 Planning Deck Before Heat Death of Universe',
      'Reduce Meeting Load by 40% (LOL)',
    ],
    portraitPixels: [
      '  HHHH  ',
      ' HHHHHH ',
      ' HSSHSS ',
      ' SSSSSS ',
      '  SMMS  ',
      '   SS   ',
      ' CCCCCC ',
      ' CCCCCC ',
      '  LLLL  ',
      '  L  L  ',
    ],
  },
  {
    id: 'backlog-bob',
    name: 'Backlog Bob',
    title: 'Engineering Lead',
    speed: 2,
    capacity: 5,
    description: 'Carries the most OKRs. His backlog has a backlog.',
    color: '#4ECDC4',
    skinTone: '#D2A679',
    hairColor: '#2C1810',
    shirtColor: '#4ECDC4',
    startGridX: 18,
    startGridY: 1,
    okrs: [
      'Clear 200 JIRA Tickets (Currently at 847)',
      'Achieve Inbox Zero Once This Quarter',
      'Onboard 3 New Devs Without Crying',
      'Migrate Legacy Service Before It Migrates Us',
      'Write Unit Tests (Yes, Really This Time)',
    ],
    portraitPixels: [
      '  HHHH  ',
      ' HHHHHH ',
      ' HSSHSS ',
      ' SSSSSS ',
      '  SMMS  ',
      '  SSSS  ',
      ' CCCCCC ',
      ' CCCCCC ',
      '  LLLL  ',
      '  L  L  ',
    ],
  },
  {
    id: 'agile-alex',
    name: 'Agile Alex',
    title: 'Scrum Master',
    speed: 3,
    capacity: 3,
    description: 'Perfectly balanced, as all sprints should be.',
    color: '#45B7D1',
    skinTone: '#E8B88A',
    hairColor: '#4A3728',
    shirtColor: '#45B7D1',
    startGridX: 1,
    startGridY: 13,
    okrs: [
      'Improve Sprint Velocity by 15% (Without Fudging Points)',
      'Facilitate 50 Retros Without Falling Asleep',
      'Get Team to Actually Update JIRA',
    ],
    portraitPixels: [
      '  HHHH  ',
      ' HHHHHH ',
      ' HSSHSS ',
      ' SSSSSS ',
      '  SMMS  ',
      '   SS   ',
      ' CCCCCC ',
      ' CCCCCC ',
      '  LLLL  ',
      '  L  L  ',
    ],
  },
  {
    id: 'scrum-sam',
    name: 'Scrum Sam',
    title: 'Dev Lead',
    speed: 4,
    capacity: 3,
    description: 'Quick and capable. Writes code faster than specs change.',
    color: '#96CEB4',
    skinTone: '#C6956A',
    hairColor: '#1A1110',
    shirtColor: '#96CEB4',
    startGridX: 18,
    startGridY: 13,
    okrs: [
      'Ship Feature Flag System Nobody Asked For',
      'Reduce P0 Incidents to < 2/month',
      'Convince Team That Rust Rewrite Is Worth It',
    ],
    portraitPixels: [
      '  HHHH  ',
      ' HHHHHH ',
      ' HSSHSS ',
      ' SSSSSS ',
      '  SMMS  ',
      '   SS   ',
      ' CCCCCC ',
      ' CCCCCC ',
      '  LLLL  ',
      '  L  L  ',
    ],
  },
  {
    id: 'deploy-dana',
    name: 'Deploy Dana',
    title: 'DevOps Engineer',
    speed: 3,
    capacity: 4,
    description: 'Reliable delivery. Her pipelines never break. Almost.',
    color: '#FFEAA7',
    skinTone: '#F4C7A3',
    hairColor: '#D4A04A',
    shirtColor: '#FFEAA7',
    startGridX: 5,
    startGridY: 7,
    okrs: [
      'Achieve 99.99% Uptime (Currently 99.97% RIP)',
      'Automate All the Things',
      'Migrate to K8s Without Downtime (Pray)',
      'Reduce Deploy Time from 45min to 5min',
    ],
    portraitPixels: [
      '  HHHH  ',
      ' HHHHHH ',
      ' HSSHSS ',
      ' SSSSSS ',
      '  SMMS  ',
      '   SS   ',
      ' CCCCCC ',
      ' CCCCCC ',
      '  LLLL  ',
      '  L  L  ',
    ],
  },
  {
    id: 'standup-steve',
    name: 'Standup Steve',
    title: 'Frontend Dev',
    speed: 5,
    capacity: 1,
    description: 'Speed demon. His standups are one sentence long.',
    color: '#DDA0DD',
    skinTone: '#E8B88A',
    hairColor: '#B8860B',
    shirtColor: '#DDA0DD',
    startGridX: 15,
    startGridY: 7,
    okrs: [
      'Rewrite Dashboard in Latest JS Framework (Again)',
    ],
    portraitPixels: [
      '  HHHH  ',
      ' HHHHHH ',
      ' HSSHSS ',
      ' SSSSSS ',
      '  SMMS  ',
      '   SS   ',
      ' CCCCCC ',
      ' CCCCCC ',
      '  LLLL  ',
      '  L  L  ',
    ],
  },
];

// Jrod - the delivery destination
const JROD = {
  id: 'jrod',
  name: 'Jrod',
  fullName: 'John Rodrigues',
  title: 'Director, ODSP',
  description: 'The big boss. Deliver your OKRs here!',
  color: '#FFD700',
  skinTone: '#D2A679',
  hairColor: '#2C1810',
  shirtColor: '#1a1a2e',
  tieColor: '#FFD700',
  gridX: 10,
  gridY: 7,
  portraitPixels: [
    '  HHHH  ',
    ' HHHHHH ',
    ' HSSHSS ',
    ' SSSSSS ',
    '  SMMS  ',
    '   SS   ',
    ' CCCCCC ',
    ' CTTTCC ',
    '  LLLL  ',
    '  L  L  ',
  ],
};

// ============================================================
// Pixel-Art Rendering
// ============================================================
// Portrait legend:
//   H = hair, S = skin, M = mouth, C = shirt/clothes,
//   L = legs/pants, T = tie (Jrod only), space = transparent
//
// These functions draw characters on a canvas context.
// ============================================================

function getPixelColor(char, character) {
  switch (char) {
    case 'H': return character.hairColor;
    case 'S': return character.skinTone;
    case 'M': return '#CC4444';
    case 'C': return character.shirtColor;
    case 'L': return '#2C3E6B';
    case 'T': return character.tieColor || character.shirtColor;
    default: return null;
  }
}

/**
 * Draw a character portrait on a canvas context.
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} character - A character or JROD object
 * @param {number} x - Top-left x position
 * @param {number} y - Top-left y position
 * @param {number} pixelSize - Size of each "pixel" in the portrait
 */
function drawCharacterPortrait(ctx, character, x, y, pixelSize) {
  const pixels = character.portraitPixels;
  for (let row = 0; row < pixels.length; row++) {
    for (let col = 0; col < pixels[row].length; col++) {
      const ch = pixels[row][col];
      const color = getPixelColor(ch, character);
      if (color) {
        ctx.fillStyle = color;
        ctx.fillRect(
          x + col * pixelSize,
          y + row * pixelSize,
          pixelSize,
          pixelSize
        );
      }
    }
  }
}

/**
 * Draw the in-game character sprite (smaller, for the map).
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} character
 * @param {number} x - Center x
 * @param {number} y - Center y
 * @param {number} size - Sprite bounding size
 * @param {number} frame - Animation frame (0-3)
 */
function drawCharacterSprite(ctx, character, x, y, size, frame) {
  const half = size / 2;
  const quarter = size / 4;

  // Body
  ctx.fillStyle = character.shirtColor;
  ctx.fillRect(x - quarter, y - quarter, half, half);

  // Head
  ctx.fillStyle = character.skinTone;
  ctx.beginPath();
  ctx.arc(x, y - half + 2, quarter, 0, Math.PI * 2);
  ctx.fill();

  // Hair
  ctx.fillStyle = character.hairColor;
  ctx.beginPath();
  ctx.arc(x, y - half, quarter, Math.PI, Math.PI * 2);
  ctx.fill();

  // Legs - animate with frame
  ctx.fillStyle = '#2C3E6B';
  const legOffset = Math.sin(frame * Math.PI / 2) * 3;
  ctx.fillRect(x - quarter + 2, y + quarter, 4, quarter);
  ctx.fillRect(x + quarter - 6 + legOffset, y + quarter, 4, quarter);
}

/**
 * Draw Jrod at his HQ location (larger sprite with tie and crown).
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x - Center x
 * @param {number} y - Center y
 * @param {number} size - Sprite bounding size
 */
function drawJrodSprite(ctx, x, y, size) {
  const half = size / 2;
  const quarter = size / 4;

  // Body
  ctx.fillStyle = JROD.shirtColor;
  ctx.fillRect(x - quarter - 2, y - quarter, half + 4, half + 4);

  // Tie
  ctx.fillStyle = JROD.tieColor;
  ctx.beginPath();
  ctx.moveTo(x, y - quarter);
  ctx.lineTo(x - 3, y + quarter);
  ctx.lineTo(x + 3, y + quarter);
  ctx.closePath();
  ctx.fill();

  // Head
  ctx.fillStyle = JROD.skinTone;
  ctx.beginPath();
  ctx.arc(x, y - half + 2, quarter + 2, 0, Math.PI * 2);
  ctx.fill();

  // Hair
  ctx.fillStyle = JROD.hairColor;
  ctx.beginPath();
  ctx.arc(x, y - half, quarter + 2, Math.PI, Math.PI * 2);
  ctx.fill();

  // Gold crown / boss indicator
  ctx.fillStyle = '#FFD700';
  ctx.fillRect(x - quarter, y - half - quarter - 2, half, 3);
  ctx.fillRect(x - quarter, y - half - quarter - 5, 3, 5);
  ctx.fillRect(x, y - half - quarter - 5, 3, 5);
  ctx.fillRect(x + quarter - 3, y - half - quarter - 5, 3, 5);
}

// ============================================================
// Character Selection Screen
// ============================================================

/**
 * Draw the full character selection screen.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} canvasWidth
 * @param {number} canvasHeight
 * @param {number} selectedIndex - Currently highlighted character index
 * @param {number} hoverIndex - Character being hovered (-1 if none)
 */
function drawCharacterSelect(ctx, canvasWidth, canvasHeight, selectedIndex, hoverIndex) {
  // Background
  ctx.fillStyle = '#1a1a2e';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Title
  ctx.fillStyle = '#FFD700';
  ctx.font = 'bold 28px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('SELECT YOUR DELIVERY AGENT', canvasWidth / 2, 50);

  ctx.fillStyle = '#AAAAAA';
  ctx.font = '14px monospace';
  ctx.fillText('Choose wisely - each agent has unique stats and OKRs!', canvasWidth / 2, 75);

  // Character cards - 3 per row, 2 rows
  const cardWidth = 180;
  const cardHeight = 240;
  const gap = 20;
  const totalRowWidth = 3 * cardWidth + 2 * gap;
  const startX = (canvasWidth - totalRowWidth) / 2;
  const startY = 100;

  CHARACTERS.forEach((char, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const cx = startX + col * (cardWidth + gap);
    const cy = startY + row * (cardHeight + gap);

    // Card background
    const isSelected = i === selectedIndex;
    const isHovered = i === hoverIndex;

    ctx.fillStyle = isSelected ? '#2a2a4e' : '#16213e';
    ctx.strokeStyle = isSelected ? '#FFD700' : isHovered ? '#AAAAAA' : '#0f3460';
    ctx.lineWidth = isSelected ? 3 : 1;
    ctx.fillRect(cx, cy, cardWidth, cardHeight);
    ctx.strokeRect(cx, cy, cardWidth, cardHeight);

    // Portrait
    drawCharacterPortrait(ctx, char, cx + (cardWidth - 8 * 6) / 2, cy + 10, 6);

    // Name
    ctx.fillStyle = char.color;
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(char.name, cx + cardWidth / 2, cy + 85);

    // Title
    ctx.fillStyle = '#AAAAAA';
    ctx.font = '11px monospace';
    ctx.fillText(char.title, cx + cardWidth / 2, cy + 100);

    // Stats bars
    const statsX = cx + 15;
    const statsY = cy + 115;
    const barWidth = cardWidth - 30;

    // Speed bar
    ctx.fillStyle = '#AAAAAA';
    ctx.font = '10px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('SPD', statsX, statsY);
    ctx.fillStyle = '#333';
    ctx.fillRect(statsX + 30, statsY - 8, barWidth - 30, 8);
    ctx.fillStyle = '#FF6B6B';
    ctx.fillRect(statsX + 30, statsY - 8, (barWidth - 30) * (char.speed / 5), 8);

    // Capacity bar
    ctx.fillStyle = '#AAAAAA';
    ctx.fillText('CAP', statsX, statsY + 18);
    ctx.fillStyle = '#333';
    ctx.fillRect(statsX + 30, statsY + 10, barWidth - 30, 8);
    ctx.fillStyle = '#4ECDC4';
    ctx.fillRect(statsX + 30, statsY + 10, (barWidth - 30) * (char.capacity / 5), 8);

    // Description
    ctx.fillStyle = '#888888';
    ctx.font = '9px monospace';
    ctx.textAlign = 'center';
    const desc = char.description;
    // Simple word wrap
    const words = desc.split(' ');
    let line = '';
    let lineY = statsY + 38;
    words.forEach(word => {
      const test = line + word + ' ';
      if (ctx.measureText(test).width > cardWidth - 20) {
        ctx.fillText(line.trim(), cx + cardWidth / 2, lineY);
        line = word + ' ';
        lineY += 12;
      } else {
        line = test;
      }
    });
    if (line.trim()) {
      ctx.fillText(line.trim(), cx + cardWidth / 2, lineY);
    }

    // OKR count badge
    ctx.fillStyle = '#e74c3c';
    ctx.beginPath();
    ctx.arc(cx + cardWidth - 15, cy + 15, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(char.okrs.length, cx + cardWidth - 15, cy + 19);
  });

  // Instructions
  ctx.fillStyle = '#AAAAAA';
  ctx.font = '14px monospace';
  ctx.textAlign = 'center';
  const instructionY = startY + 2 * (cardHeight + gap) + 20;
  ctx.fillText('Click a character or use Arrow Keys + Enter to select', canvasWidth / 2, instructionY);
  ctx.fillStyle = '#e74c3c';
  ctx.font = '11px monospace';
  ctx.fillText('Badge shows number of OKRs to deliver', canvasWidth / 2, instructionY + 20);
}

/**
 * Get the character card index at a given mouse position.
 * Returns -1 if no card is at that position.
 */
function getCharacterCardAt(mouseX, mouseY, canvasWidth) {
  const cardWidth = 180;
  const cardHeight = 240;
  const gap = 20;
  const totalRowWidth = 3 * cardWidth + 2 * gap;
  const startX = (canvasWidth - totalRowWidth) / 2;
  const startY = 100;

  for (let i = 0; i < CHARACTERS.length; i++) {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const cx = startX + col * (cardWidth + gap);
    const cy = startY + row * (cardHeight + gap);

    if (mouseX >= cx && mouseX <= cx + cardWidth &&
        mouseY >= cy && mouseY <= cy + cardHeight) {
      return i;
    }
  }
  return -1;
}

// ============================================================
// OKR Items (Pickup Objects)
// ============================================================

/**
 * Create OKR pickup items for the selected character.
 * Returns an array of OKR objects placed at random grid positions.
 * @param {object} character - The selected character
 * @param {number} gridCols - Map grid columns
 * @param {number} gridRows - Map grid rows
 * @param {function} isWalkable - Function(gridX, gridY) => boolean
 */
function createOKRPickups(character, gridCols, gridRows, isWalkable) {
  const okrs = [];
  const usedPositions = new Set();
  usedPositions.add(`${character.startGridX},${character.startGridY}`);
  usedPositions.add(`${JROD.gridX},${JROD.gridY}`);

  character.okrs.forEach((okrName, index) => {
    let gx, gy;
    let attempts = 0;
    do {
      gx = Math.floor(Math.random() * gridCols);
      gy = Math.floor(Math.random() * gridRows);
      attempts++;
    } while (
      (usedPositions.has(`${gx},${gy}`) || !isWalkable(gx, gy)) &&
      attempts < 200
    );

    usedPositions.add(`${gx},${gy}`);

    okrs.push({
      id: `okr-${index}`,
      name: okrName,
      gridX: gx,
      gridY: gy,
      collected: false,
      delivered: false,
    });
  });

  return okrs;
}

/**
 * Draw an OKR pickup item (glowing pizza box).
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x - Center x
 * @param {number} y - Center y
 * @param {number} size - Item size
 * @param {number} time - Current time for glow animation
 */
function drawOKRPickup(ctx, x, y, size, time) {
  const glow = 0.5 + 0.5 * Math.sin(time / 300);
  const half = size / 2;

  // Glow effect
  ctx.shadowColor = '#FFD700';
  ctx.shadowBlur = 8 + glow * 8;

  // Pizza box base
  ctx.fillStyle = '#D4A04A';
  ctx.fillRect(x - half, y - half + 2, size, size - 4);

  // Box lid
  ctx.fillStyle = '#E8C07A';
  ctx.fillRect(x - half, y - half, size, size / 2);

  // Domino's-style dots
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(x - 3, y - 3, 2, 0, Math.PI * 2);
  ctx.arc(x + 3, y + 1, 2, 0, Math.PI * 2);
  ctx.fill();

  // Reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;

  // OKR label
  ctx.fillStyle = '#8B0000';
  ctx.font = 'bold 7px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('OKR', x, y + half + 10);
}

/**
 * Draw a carried OKR indicator in the HUD.
 * @param {CanvasRenderingContext2D} ctx
 * @param {object} okr - The OKR object
 * @param {number} x - Position x
 * @param {number} y - Position y
 */
function drawCarriedOKR(ctx, okr, x, y) {
  // Mini pizza box
  ctx.fillStyle = okr.delivered ? '#27ae60' : '#D4A04A';
  ctx.fillRect(x, y, 20, 16);
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 1;
  ctx.strokeRect(x, y, 20, 16);

  // Checkmark if delivered
  if (okr.delivered) {
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 4, y + 8);
    ctx.lineTo(x + 9, y + 13);
    ctx.lineTo(x + 16, y + 3);
    ctx.stroke();
  }
}

// ============================================================
// Exports (for use in main game)
// ============================================================

// Make available globally for script-tag usage
if (typeof window !== 'undefined') {
  window.GameCharacters = {
    CHARACTERS,
    JROD,
    drawCharacterPortrait,
    drawCharacterSprite,
    drawJrodSprite,
    drawCharacterSelect,
    getCharacterCardAt,
    createOKRPickups,
    drawOKRPickup,
    drawCarriedOKR,
  };
}
