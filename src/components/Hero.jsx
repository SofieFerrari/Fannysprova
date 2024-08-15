import logo from "../assets/images/klangrumlogga.svg"
import headerPic from "../assets/images/fanny_hemtext.jpeg"
// import hamburger from "../assets/images/burger.svg";

export const Header = () => {


	return (
		<>
			<header className="relative flex w-full flex-col items-center">
				<img src={headerPic} className="relative h-auto w-full object-cover" />
				<img
					src={logo}
					className="absolute left-1/2 top-1/2 w-32 -translate-x-1/2 -translate-y-1/2 transform md:left-4 md:top-4 md:w-24 md:translate-x-0 md:translate-y-0 lg:left-4 lg:top-4 lg:w-24"
				/>
			</header>
		</>
	)
}
