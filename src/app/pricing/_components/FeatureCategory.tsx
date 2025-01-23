const FeatureCategory = ({
	children,
	label,
}: {
	children: React.ReactNode;
	label: string;
}) => {
	return (
		<div>
			<h3>{label}</h3>
			<div>{children}</div>
		</div>
	);
};

export default FeatureCategory;
