interface AdvancedSelectItem {
	title: string;
}

interface AdvancedSelectProps {
	label: string;
	data: Array<AdvancedSelectItem>;
	onChange: (current: AdvancedSelectItem) => void;

	dataItemTitle?: (item: AdvancedSelectItem, key: string | null | undefined) => string;
	dataItemTitleKey: string | null | undefined;

	onUpdate?: (oldProps, newProps, comp_this) => void;
}