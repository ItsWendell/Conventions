module.exports = {
	branch: 'develop',
	tagFormat: '${version}',
	analyzeCommits: {
		path: '@semantic-release/commit-analyzer',
		preset: 'peakfijn',
		releaseRules: 'release-rules-peakfijn',
	},
	generateNotes: [
		{
			path: '@semantic-release/release-notes-generator',
			preset: 'peakfijn',
		},
	],
	verifyConditions: [
		'@semantic-release/changelog',
		'@semantic-release/npm',
		'semantic-release-expo',
		'semantic-release-git-branches',
	],
	prepare: [
		'@semantic-release/changelog',
		{
			path: '@semantic-release/npm',
			npmPublish: false,
		},
		{
			path: 'semantic-release-expo',
			manifests: [
				'app.test.json',
				'app.staging.json',
				'app.production.json',
			],
		},
		{
			path: 'semantic-release-git-branches',
			branchPush: true,
			branchMerges: ['develop', 'master'],
			message: 'release: create new version ${nextRelease.version}\n\n${nextRelease.notes}',
			assets: [
				'CHANGELOG.md',
				'app.test.json',
				'app.staging.json',
				'app.production.json',
				'package.json',
				'package-lock.json',
			],
		},
	],
	publish: false,
	success: false,
	fail: false,
};