publish:
	@npm set //registry.npmjs.org/:_authToken ${NPM_TOKEN}
	npm whoami
	npm version patch
	npm publish --access public
test:
	npx eslint ./
