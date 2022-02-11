import log from 'npmlog';

import { Package } from '../package';

export type VersioningStrategy = 'fixed' | 'independent';
export type ChangelogType = 'fixed' | 'independent' | 'root';
export type ChangelogPresetConfig = string | { name: string;[key: string]: unknown };

export interface BaseChangelogOptions {
  changelogPreset: ChangelogPresetConfig;
  rootPath: string;
  tagPrefix: string;
}

export interface CommandOptions {
  rollPublish?: boolean;
  rollVersion?: boolean;
}

export interface DescribeRefOptions {
  /* Defaults to `process.cwd()` */
  cwd?: string;

  /* Glob passed to `--match` flag */
  match?: string;
}

/* When annotated release tags are missing */
export interface DescribeRefFallbackResult {
  isDirty: boolean;
  refCount: string;
  sha: string;
}

/* When annotated release tags are present */
export interface DescribeRefDetailedResult {
  lastTagName: string;
  lastVersion: string;
  isDirty: boolean;
  refCount: string;
  sha: string;
}

/** Provided to any execa-based call */
export interface ExecOpts {
  cwd: string;
  maxBuffer?: number;
}

export interface LifecycleConfig {
  log?: typeof log;
  ignorePrepublish?: boolean;
  ignoreScripts?: boolean;
  nodeOptions?: string;
  scriptShell?: string;
  scriptsPrependNodePath?: boolean;
  snapshot?: any;
  unsafePerm?: boolean;
}

export interface Manifest {
  name: string;
  location: string;
  manifest: Package;
  version: string;
}

export interface UpdateChangelogOption {
  changelogHeaderMessage?: string;
  changelogVersionMessage?: string;
  changelogPreset?: string;
  rootPath: string;
  tagPrefix?: string;
  version?: string;
}

export interface FetchConfig {
  fetchRetries: number;
  log: typeof log;
  registry: string;
  username: string;
}

export interface PackConfig {
  log: typeof log;

  /* If "publish", run "prepublishOnly" lifecycle */
  lernaCommand?: string;
  ignorePrepublish?: boolean;
}

export interface ProfileData {
  tfa: { pending: boolean; mode: 'auth-and-writes' | 'auth-only' };
  name: string;
  /* legacy field alias of `name` */
  username: string;
  email: string;
  email_verified: boolean;
  created: string;
  updated: string;
  fullname?: string;
  twitter?: string;
  github?: string;
}

export interface QueryGraphConfig {
  /** "dependencies" excludes devDependencies from graph */
  graphType?: 'allDependencies' | 'dependencies';

  /** Whether or not to reject dependency cycles */
  rejectCycles?: boolean;
}

export interface TopologicalConfig extends QueryGraphConfig {
  concurrency?: number;
}
