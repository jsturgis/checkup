import { JsonMetaTaskResult, TaskIdentifier } from '@checkup/core';

export default {};

export interface MetaTask {
  meta: TaskIdentifier;

  run: () => Promise<MetaTaskResult>;
}

export interface MetaTaskResult {
  outputPosition: OutputPosition;
  toConsole: () => void;
  toJson: () => JsonMetaTaskResult;
}

export const enum OutputPosition {
  Header,
  Footer,
}

export const enum TestType {
  Application = 'application',
  Container = 'container',
  Rendering = 'rendering',
  Unit = 'unit',
}

export type RepositoryInfo = {
  totalCommits: number;
  totalFiles: number;
  age: string;
  activeDays: string;
};
