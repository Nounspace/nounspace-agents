import { logger, 
  type IAgentRuntime, 
  type Project, 
  type ProjectAgent 
} from '@elizaos/core';

// import farcasterTomPlugin from '../plugin-tom-farcaster/dist/';
import farcasterPlugin from '../plugin-farcaster/dist/';
import TwitterPlugin from '../plugin-twitter/dist/';
// import starterPlugin from './plugin.ts';

import { character } from './character.ts';
import { characterTom } from './characterTom.ts';
import { characterNoun584 } from './characterNoun584.ts';
import { characterClankerTest } from './characterClankerTest.ts';

const initCharacter = ({ runtime }: { runtime: IAgentRuntime }) => {
  logger.info('Initializing character');
  logger.info({ name: runtime.character.name }, 'Name:');
};

export const projectAgentTom: ProjectAgent = {
  character: characterTom,
  init: async (runtime: IAgentRuntime) => await initCharacter({ runtime }),
  plugins: [
    // farcasterPlugin
    // starterPlugin
  ], 
};

export const projectAgentNoun584: ProjectAgent = {
  character: characterNoun584,
  init: async (runtime: IAgentRuntime) => await initCharacter({ runtime }),
  // plugins: [starterPlugin], <-- Import custom plugins here
  plugins: [
    // farcasterPlugin
  ],
};


export const projectClankerTest: ProjectAgent = {
  character: characterClankerTest,
  init: async (runtime: IAgentRuntime) => await initCharacter({ runtime }),
  // plugins: [starterPlugin], <-- Import custom plugins here
  plugins: [
    // farcasterPlugin
    // TwitterPlugin
  ],
};


const project: Project = {
  agents: [
    projectAgentTom,
    // projectAgentNoun584,
    // projectClankerTest
  ],
};

export { character } from './character.ts';
export { characterTom } from './characterTom.ts';
export { characterNoun584 } from './characterNoun584.ts';

export default project;
