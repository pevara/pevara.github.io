// tests/e2e/specs/homeview.spec.js

describe('HomeView', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	const tools = [
		{name: "triangles", icon: "change_history", text: 'Triangles', href: 'triangles'},
		{name: "spacing", icon: "format_letter_spacing", text: 'Equal spaces', href: 'spacing'},
		{name: "slopes", icon: "percent", text: 'Slopes & Angles', href: 'slopes'},
		{name: "conversion", icon: "swap_horiz", text: 'Conversion', href: 'conversion'},
		{name: "surfaces", icon: "rectangle", text: 'Surfaces', href: 'surfaces'},
		{name: "volumes", icon: "deployed_code", text: 'Volumes', href: 'volumes'},
		{name: "calculate", icon: "calculate", text: 'Calculator', href: 'calculate'},
		{name: "notes", icon: "edit_square", text: 'Notes', href: 'notes'},
		{name: "history", icon: "history", text: 'History', href: 'history'}
	];


	it('should display the page title', () => {
		cy.get('h1').should('contain.text', 'Choose your Tool');
	});

	it('should have a list of tools with correct links and icons', () => {
		tools.forEach((tool) => {
			cy.get(`[data-name="${tool.name}"]`).within((node) => {
				cy.get('.icon').should('contain.text', tool.icon);
				cy.wrap(node).should('contain.text', tool.text);
			});
		});
	});

	it('should navigate to the correct page when tool buttons are clicked', () => {
        tools.forEach((tool) => {
			cy.get(`[data-name="${tool.name}"]`).click();
            cy.url().should('contain', tool.href);
			cy.visit('/');
		});
	});
});