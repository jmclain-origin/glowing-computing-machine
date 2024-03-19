/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

const branchName = execSync('git branch --show-current').toString().trim();

if (!/^JIRA-\d{1,5}/.test(branchName)) {
  console.error(
    'ERROR: Branch names must start with "SMSDEV-{XXX}" and end with Jira ticket number.',
  );
  process.exit(1);
}
