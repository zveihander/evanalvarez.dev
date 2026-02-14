<script lang="ts">
	const library = [
		{
			name: 'fiction',
			subcategories: [
				{
					name: 'dystopian',
					topics: [
						{
							name: 'general',
							books: [{ title: 'Nineteen Eighty-Four', author: 'George Orwell' }]
						}
					]
				},
				{
					name: 'fantasy',
					topics: [
						{
							name: 'general',
							books: [
								{ title: 'The Hobbit, Illustrated', author: 'Tolkien, JRR; Lee, Alan' },
								{ title: 'The Lord of the Rings Illustrated Edition', author: 'JRR Tolkien' }
							]
						},
						{
							name: 'A Song of Ice and Fire',
							books: [
								{ title: '01 - A Game of Thrones', author: 'George RR Martin' },
								{ title: '02 - A Clash of Kings', author: 'George RR Martin' },
								{ title: '03 - A Storm of Swords', author: 'George RR Martin' },
								{ title: '04 - A Feast for Crows', author: 'George RR Martin' },
								{ title: '05 - A Dance with Dragons', author: 'George RR Martin' }
							]
						}
					]
				},
				{
					name: 'historical',
					topics: [
						{
							name: 'general',
							books: [
								{ title: 'Blood Meridian', author: 'Cormac McCarthy' },
								{ title: 'The Club Dumas', author: 'Perez-Reverte, Arturo' },
								{ title: 'The Great Gatsby', author: 'F Scott Fitzgerald' },
								{ title: 'The Name of the Rose', author: 'Eco, Umberto' },
								{ title: 'The Poisonwood Bible', author: 'Barbara Kingsolver' },
								{ title: 'To Kill a Mockingbird', author: 'Lee, Harper' },
								{ title: 'Go Set a Watchman', author: 'Lee, Harper' }
							]
						}
					]
				},
				{
					name: 'psychological',
					topics: [
						{
							name: 'general',
							books: [
								{ title: 'Crime and Punishment', author: 'Dostoyevsky, Fyodor' },
								{ title: 'The Brothers Karamazov', author: 'Fyodor Dostoyevsky' },
								{ title: 'The Idiot', author: 'Fyodor Dostoyevsky' }
							]
						}
					]
				},
				{
					name: 'sci-fi',
					topics: [
						{
							name: 'general',
							books: [
								{ title: 'Do Androids Dream of Electric Sheep', author: 'Philip K Dick' },
								{ title: 'Frankenstein - Or the Modern Prometheus', author: 'Mary Shelley' },
								{ title: 'Neuromancer', author: 'Gibson, William' },
								{ title: 'Snow Crash', author: 'Stephenson, Neal' },
								{ title: 'The End of Eternity', author: 'Asimov, Isaac' },
								{ title: 'The Gods Themselves', author: 'Isaac Asimov' }
							]
						},
						{
							name: 'The Foundation Novels',
							books: [
								{ title: '01 - Prelude to Foundation', author: 'Asimov, Isaac' },
								{ title: '02 - Forward the Foundation', author: 'Asimov, Isaac' },
								{ title: '03 - Foundation', author: 'Asimov, Isaac' },
								{ title: '04 - Foundation and Empire', author: 'Asimov, Isaac' },
								{ title: '05 - Second Foundation', author: 'Asimov, Isaac' },
								{ title: "06 - Foundation's Edge", author: 'Asimov, Isaac' },
								{ title: '07 - Foundation and Earth', author: 'Asimov, Isaac' }
							]
						}
					]
				}
			]
		},
		{
			name: 'nonfiction',
			subcategories: [
				{
					name: 'cybersecurity',
					topics: [
						{
							name: 'general',
							books: [
								{
									title: "Gray Hat Hacking - The Ethical Hacker's Handbook, Fourth Edition",
									author: 'Daniel Regalado et al.'
								},
								{ title: 'Hacking - The Art of Exploitation, 2nd Edition', author: 'Jon Erickson' },
								{
									title: "Metasploit - The Penetration Tester's Guide",
									author: 'Kennedy, David et al.'
								},
								{
									title:
										'Practical Malware Analysis - The Hands-On Guide to Dissecting Malicious Software',
									author: 'Michael Sikorski & Andrew Honig'
								},
								{
									title:
										"The Web Application Hacker's Handbook - Finding and Exploiting Security Flaws",
									author: 'Stuttard, Dafydd; Pinto, Marcus'
								}
							]
						}
					]
				},
				{
					name: 'language',
					topics: [
						{
							name: 'spanish',
							books: [{ title: 'Easy Spanish Step-By-Step', author: 'Barbara Bregstein' }]
						}
					]
				},
				{
					name: 'philosophy',
					topics: [
						{
							name: 'general',
							books: [
								{ title: 'Critique of Pure Reason', author: 'Immanuel Kant' },
								{ title: 'Meditations', author: 'Marcus Aurelius' },
								{
									title:
										'Meditations on First Philosophy - with Selections from the Objections and Replies',
									author: 'René Descartes; translated by Michael Moriarty'
								},
								{ title: 'Nicomachean Ethics', author: 'Aristotle' },
								{ title: 'Republic', author: 'Plato' },
								{ title: 'Thus Spoke Zarathustra', author: 'Friedrich Nietzsche' }
							]
						}
					]
				},
				{
					name: 'programming',
					topics: [
						{
							name: 'general',
							books: [
								{
									title:
										'The Mythical Man-Month - Essays on Software Engineering, Anniversary Edition',
									author: 'Brooks, Frederick Phillips'
								},
								{
									title: 'Clean Code - A Handbook of Agile Software Craftsmanship',
									author: 'Robert C Martin'
								},
								{ title: 'Programming Pearls, 2nd Edition', author: 'Jon Bentley' },
								{
									title: 'Refactoring - Improving the Design of Existing Code',
									author: 'Martin Fowler'
								},
								{
									title:
										'The Pragmatic Programmer - Your Journey to Mastery, 20th Anniversary Edition',
									author: 'Andrew Hunt & David Thomas'
								},
								{
									title: 'The Art of Computer Programming - Volume 1 Fundamental Algorithms',
									author: 'Donald E. Knuth'
								},
								{
									title: 'The Art of Computer Programming - Volume 2 Seminumerical Algorithms',
									author: 'Donald E. Knuth'
								},
								{
									title: 'The Art of Computer Programming - Volume 3 Sorting and Searching',
									author: 'Donald E. Knuth'
								},
								{
									title:
										'The Art of Computer Programming - Volume 4A Combinatorial Algorithms, Part 1',
									author: 'Donald E. Knuth'
								},
								{
									title:
										'The Art of Computer Programming - Volume 4B Combinatorial Algorithms, Part 2',
									author: 'Donald E. Knuth'
								},
								{
									title:
										'The MMIX Supplement Supplement to The Art of Computer Programming Volumes 1, 2, 3 by Donald E. Knuth',
									author: 'Ruckert, Martin'
								}
							]
						},
						{
							name: 'ada',
							books: [
								{
									title: 'Beginning Ada Programming - From Novice to Professional',
									author: 'Andrew T Shvets'
								},
								{ title: 'Programming in Ada 2022', author: 'John Barnes' }
							]
						},
						{
							name: 'bash',
							books: [
								{ title: 'Bash Cookbook, 2nd Edition', author: 'JP Vossen & Carl Albing' },
								{
									title: 'Linux Command Line and Shell Scripting Bible, 4th Edition',
									author: 'Richard Blum & Christine Bresnahan'
								},
								{
									title: 'The Linux Command Line - A Complete Introduction, 2nd Edition',
									author: 'William Shotts'
								},
								{
									title: 'Wicked Cool Shell Scripts - 101 Scripts for Linux, OS X, UNIX Systems',
									author: 'Dave Taylor & Brandon Perry'
								}
							]
						},
						{
							name: 'c',
							books: [
								{ title: '21st Century C - C tips from the new school', author: 'Klemens, Ben' },
								{ title: 'C Programming - A Modern Approach', author: 'K N King' },
								{
									title: 'C in a Nutshell The Definitive Reference',
									author: 'Peter Prinz and Tony Crawford'
								},
								{
									title:
										'Effective C, 2nd Edition - An Introduction to Professional C  Programming',
									author: 'Robert C Seacord'
								},
								{ title: 'Practical C Programming, 3rd Edition', author: 'Steve Oualline' },
								{
									title: 'The C Programming Language, 2nd Edition',
									author: 'Brian W Kernighan & Dennis M Ritchie'
								},
								{
									title: 'An Introduction to C & GUI Programming',
									author: 'Simon Long, Phil King'
								},
								{ title: 'Foundations of GTK+ Development', author: 'Andrew Krause' },
								{ title: 'The Standard C Library', author: 'Plauger, PJ' },
								{
									title:
										'OpenGL Programming Guide - The Official Guide to Learning OpenGL, Version 4.5 with SPIR-V',
									author: 'John Kessenich, Graham Sellers, Dave Shreiner'
								},
								{
									title: 'OpenGL SuperBible - Comprehensive Tutorial and Reference',
									author: 'Graham Sellers, Richard S. Wright, Nicholas Haemel'
								},
								{
									title: 'Vulkan Programming Guide - The Official Guide to Learning Vulkan',
									author: 'Graham Sellers, John Kessenich'
								},
								{
									title: 'Network Security with OpenSSL - Cryptography for Secure Communications',
									author: 'John Viega, Matt Messier, Pravir Chandra'
								},
								{ title: 'OpenSSL Cookbook, 3rd Edition', author: 'Ivan Ristić' },
								{
									title: 'Focus On SDL (The Premier Press Game Development Series)',
									author: 'Ernest Pazera'
								},
								{
									title: 'SQLite Database System Design and Implementation',
									author: 'Sibsankar Haldar; Alex Alagarsamy Aravind'
								},
								{
									title: 'The Definitive Guide to SQLite (Second Edition)',
									author: 'Grant Allen, Mike Owens'
								}
							]
						},
						{
							name: 'c#',
							books: [
								{
									title: 'C# 12 in a Nutshell - The Definitive Reference',
									author: 'Joseph Albahari'
								},
								{
									title: 'C# 13 and .NET 9  – Modern Cross-Platform Development',
									author: 'Mark J Price'
								}
							]
						},
						{
							name: 'c++',
							books: [
								{ title: 'A Tour of C++', author: 'Bjarne Stroustrup' },
								{ title: 'Professional C++, 6th Edition', author: 'Marc Gregoire' },
								{ title: 'Practical C++ Programming, Second Edition', author: 'Oualline, Steve' },
								{
									title: 'Programming - Principles and Practice Using C++',
									author: 'Bjarne Stroustrup'
								},
								{
									title: 'The C++ Programming Language, Fourth Edition',
									author: 'Bjarne Stroustrup'
								},
								{ title: 'The Boost C++ Libraries', author: 'Boris Schäling' },
								{
									title:
										'Effective STL - 50 Specific Ways to Improve Your Use of the Standard Template Library',
									author: 'Scott Meyers'
								},
								{
									title: 'The C++ Standard Library - A Tutorial and Reference',
									author: 'Josuttis, Nicolai'
								}
							]
						},
						{
							name: 'css',
							books: [
								{
									title: 'CSS Pocket Reference - Visual Presentation for the Web',
									author: 'Eric A Meyer'
								},
								{
									title: 'CSS Secrets - Better Solutions to Everyday Web Design Problems',
									author: 'Lea Verou'
								},
								{ title: 'CSS in Depth', author: 'Keith J Grant' },
								{
									title: 'Modern CSS - Master the Key Concepts of CSS for Modern Web Development',
									author: 'Joe Attardi'
								}
							]
						},
						{
							name: 'go',
							books: [
								{ title: 'The Go Programming Language', author: 'Brian W Kernighan' },
								{ title: '100 Go Mistakes and How to Avoid Them', author: 'Teiva Harsanyi' },
								{ title: 'Get Programming with Go', author: 'Nathan Youngman & Roger Peppé' },
								{
									title:
										'Learning Go - An Idiomatic Approach to Real-world Go Programming, 2nd Edition',
									author: 'Jon Bodner'
								}
							]
						},
						{
							name: 'haskell',
							books: [
								{
									title:
										'Effective Haskell - Solving Real-World Problems with Strongly Typed Functional Programming',
									author: 'Rebecca Skinner'
								},
								{ title: 'Get Programming with Haskell', author: 'Will Kurt' },
								{
									title: 'Haskell Programming from First Principles',
									author: 'Chris Allen & Julie Moronuki'
								},
								{ title: 'Haskell in Depth', author: 'Vitaly Bragilevsky' },
								{ title: 'Parallel and Concurrent Programming in Haskell', author: 'Simon Marlow' },
								{ title: 'Programming in Haskell, Second Edition', author: 'Hutton, Graham' }
							]
						},
						{
							name: 'html',
							books: [
								{
									title: 'HTML Pocket Reference (2nd Edition)',
									author: 'Jennifer Niederst Robbins'
								}
							]
						},
						{
							name: 'java',
							books: [
								{ title: 'Effective Java, Third Edition', author: 'Joshua Bloch' },
								{ title: 'Java - A Beginners Guide, 9th Edition', author: 'Schildt, Herbert' },
								{
									title: 'Java - The Complete Reference, Twelfth Edition',
									author: 'Herbert Schildt'
								},
								{ title: 'Java Performance - The Definitive Guide', author: 'Scott Oaks' },
								{
									title:
										'Modern Java in Action - Lambdas, Streams, Functional and Reactive Programming',
									author: 'Raoul-Gabriel Urma; Mario Fusco; Alan Mycroft'
								},
								{
									title: 'Java Persistence with Hibernate, 2nd Edition',
									author: 'Christian Bauer, Gavin King, Gary Gregory'
								},
								{
									title: 'Spring Start Here - Learn What You Need And Learn it Well',
									author: 'Laurentiu Spilca'
								},
								{ title: 'Spring in Action, Sixth Edition', author: 'Craig Walls' }
							]
						},
						{
							name: 'javascript',
							books: [
								{
									title: 'Effective javascript 68 Specific Ways to Harness the Power of javascript',
									author: 'David Herman'
								},
								{
									title: 'Eloquent JavaScript, 4th Edition - A Modern Introduction to Programming',
									author: 'Marijn Haverbeke'
								},
								{
									title: 'Functional JavaScript - Introducing Functional Programming',
									author: 'Michael Fogus'
								},
								{
									title:
										"JavaScript - The Definitive Guide - Master The World's Most-Used Programming Language",
									author: 'David Flanagan'
								},
								{
									title: 'Secrets of the JavaScript Ninja, Second Edition',
									author: 'John Resig; Bear Bibeault; Josip Maras'
								},
								{
									title: 'Advanced React - deep dives, investigations, performance',
									author: 'Nadia Makarevich'
								},
								{ title: 'Learning React, 2nd Edition', author: 'Porcello, Eve & Banks, Alex' },
								{
									title: "React Key Concepts - An in-depth guide to React's core",
									author: 'Maximilian Schwarzmüller'
								},
								{
									title: 'The Road to React - The Reactjs with Hooks in JavaScript Book',
									author: 'Robin Wieruch'
								},
								{ title: 'Electron in Action', author: 'Steve Kinney' },
								{
									title:
										'SvelteKit Up and Running  - Leverage the Power of a Next-generation Web Framework to Build High-performance Web Apps with Ease',
									author: 'Dylan Hildenbrand'
								}
							]
						},
						{
							name: 'typescript',
							books: [
								{
									title: 'Effective TypeScript - 62 Specific Ways to Improve Your Typescript',
									author: 'Dan Vanderkam'
								},
								{
									title: 'Learning TypeScript - Enhance Your Web Development Skills',
									author: 'Josh Goldberg'
								},
								{
									title: 'Programming TypeScript - Making Your JavaScript Applications Scale',
									author: 'Cherny, Boris'
								},
								{ title: 'Unleashing the Power of TypeScript', author: 'Steve Kinney' },
								{ title: 'Learn React with TypeScript, Third Edition', author: 'Carl Rippon' }
							]
						},
						{
							name: 'latex',
							books: [
								{
									title:
										'LaTeX Cookbook - Second Edition - Over 100 practical, ready-to-use LaTeX recipes for instant solutions',
									author: 'Stefan Kottwitz'
								},
								{ title: 'More Math Into LaTeX, 5th Edition', author: 'George Grätzer' },
								{ title: 'Practical LaTeX', author: 'George A Gratzer' },
								{
									title: "LaTeX Graphics with TikZ - A Practitioner's Guide to Drawing",
									author: 'Stefan Kottwitz'
								}
							]
						},
						{
							name: 'python',
							books: [
								{
									title: 'Fluent Python - Clear, Concise, and Effective Programming',
									author: 'Luciano Ramalho'
								},
								{
									title:
										'Python Crash Course For Beginners - A Crash Course Guide To Learn Python In 1 Week',
									author: 'Timothy C. Needham'
								},
								{
									title:
										'Automate the Boring Stuff with Python - Practical Programming for Total Beginners',
									author: 'Sweigart, Albert'
								},
								{ title: 'Clean Code in Python, Second Edition', author: 'Mariano Anaya' },
								{
									title: 'Effective Python - 90 specific ways to write better Python',
									author: 'Brett Slatkin'
								},
								{ title: 'Learning Python, 5th Edition', author: 'Lutz, Mark' },
								{ title: 'Django for Beginners (5th Edition)', author: 'William S Vincent' },
								{
									title: 'Flask Web Development - Developing Advanced Web Applications',
									author: 'Miguel Grinberg'
								},
								{
									title:
										"Interactive applications using Matplotlib - don't just see your data, Experience it!",
									author: 'Benjamin V Root'
								},
								{
									title: 'Elegant SciPy - The Art of Scientific Python',
									author: 'Juan Nunez-Iglesias, Stéfan van der Walt, Harriet Dashnow'
								},
								{
									title: 'Python for Data Analysis - the Python Crash Course',
									author: 'Cannon, Jason'
								}
							]
						},
						{
							name: 'r',
							books: [
								{
									title: 'Hands-On Programming with R Write Your Own Functions and Simulations',
									author: 'Garrett Grolemund, Hadley Wickham'
								},
								{
									title: 'Practical Data Science With R',
									author: '[Nina Zumel, John Mount, Jeremy Howard, Rachel Thomas'
								},
								{
									title: 'R Graphics Cookbook Practical Recipes for Visualizing Data',
									author: 'Winston Chang'
								},
								{
									title: 'R Packages - Organize, Test, Document, and Share Your Code',
									author: 'Hadley Wickham, Jenny Bryan'
								},
								{
									title: 'R for Data Science - Import, Tidy, Transform, Visualize, and Model Data',
									author: 'Hadley Wickham, Mine Çetinkaya-Rundel, Garrett Grolemund'
								},
								{
									title: 'The Art of R Programming A Tour of Statistical Software Design',
									author: 'Norman Matloff'
								}
							]
						},
						{
							name: 'rust',
							books: [
								{
									title: 'Effective Rust - 35 Specific Ways to Improve Your Rust Code',
									author: 'David Drysdale'
								},
								{
									title: 'Programming Rust - 2nd Edition',
									author: 'Jim Blandy, Jason Orendorff, Leonora Fs Tindall'
								},
								{
									title: 'Rust for Rustaceans - Idiomatic Programming for Experienced Developers',
									author: 'Jon Gjengset'
								},
								{
									title: 'Rust in Action - Systems Programming Concepts and Techniques',
									author: 'Timothy Samuel McNamara'
								},
								{
									title: 'The Rust Programming Language, 2nd Edition',
									author: 'Steve Klabnik, Carol Nichols, Carol Nichols'
								},
								{ title: 'The Secrets of Rust - Tools', author: 'John Arundel' },
								{
									title: 'Zero To Production In Rust - An introduction to backend development',
									author: 'Luca Palmieri'
								},
								{
									title: 'Rust Web Development - With warp, tokio, and reqwest',
									author: 'Bastian Gruber'
								}
							]
						},
						{
							name: 'sql',
							books: [
								{
									title: 'SQL Cookbook Query Solutions and Techniques for All SQL Users',
									author: 'Anthony Molinaro, Robert de Graaf'
								},
								{
									title: 'SQL Queries for Mere Mortals® - A Hands-On Guide to Data',
									author: 'Viescas, John L'
								},
								{
									title: 'SQL QuickStart Guide The Simplified Guide to SQL',
									author: 'Walter Shields'
								}
							]
						},
						{
							name: 'zig',
							books: [
								{
									title: 'Introduction to Zig - a project-based book',
									author: 'Pedro Duarte Faria'
								},
								{ title: 'Systems Programming with Zig (MEAP)', author: 'Garrison Hinson-Hasty' }
							]
						}
					]
				},
				{
					name: 'religion',
					topics: [
						{
							name: 'christianity',
							books: [
								{
									title: 'The Bible - Authorized King James Version',
									author: 'Unknown'
								},
								{ title: 'The Catechism of the Catholic Church', author: 'The Catholic Church' },
								{ title: 'The Ignatius Bible (Revised Standard Version)', author: 'Unknown' },
								{
									title: 'An Ignatian Introduction to Prayer - Scriptural Reflections',
									author: 'Timothy M Gallagher, OMV'
								},
								{
									title:
										'The Story of Christianity - Volume 1 - The Early Church to the Dawn of the Reformation',
									author: 'Justo L Gonzalez'
								},
								{
									title:
										'The Story of Christianity - Volume 2 - The Reformation to the Present Day',
									author: 'Justo L González'
								}
							]
						}
					]
				},
				{
					name: 'self-help',
					topics: [
						{
							name: 'general',
							books: [
								{
									title: 'Atomic Habits - The life-changing million copy bestseller',
									author: 'James Clear'
								},
								{
									title:
										'How to Take Smart Notes - One Simple Technique to Boost Writing, Learning and Thinking, 2nd Edition',
									author: 'Sönke Ahrens; Nigel Fyfe'
								}
							]
						}
					]
				}
			]
		}
	];
</script>

<div class="min-h-screen bg-gruvbox-bg">
	<div class="mx-auto max-w-screen-xl px-6 pb-20">
		<div class="flex items-center justify-start">
			<div class="pt-[5rem] text-sm text-gruvbox-fg lg:text-lg">
				<h1 class="font-serif text-3xl font-bold lg:text-5xl">library</h1>
				<nav class="mt-2 flex items-center gap-2">
					<a href="/" class="text-gruvbox-green hover:underline lg:text-[15px]">home</a>
					<span>::</span>
					<a
						href="https://git.evanalvarez.dev"
						class="text-gruvbox-green hover:underline lg:text-[15px]">cgit</a
					>
					<span>::</span>
					<a
						href="https://github.com/zveihander"
						class="text-gruvbox-green hover:underline lg:text-[15px]">github</a
					>
				</nav>
			</div>
		</div>

		<div class="text-md pt-6 font-sans text-gruvbox-fg">
			My collection of knowledge. This list is comprised of both physical and electronic books I
			have in my library. I most likely have more, but these are the ones I have been able to count.
		</div>

		<div class="pt-10 text-gruvbox-fg">
			<div class="space-y-12">
				{#each library as category}
					<section>
						<h2 class="text-gruvbox-yellow text-2xl font-bold">
							◉ {category.name}
						</h2>

						<div class="mt-4 space-y-8 pl-4">
							{#each category.subcategories as sub}
								<div class="space-y-4">
									<h3 class="text-xl font-bold text-gruvbox-green">
										○ {sub.name}
									</h3>

									<div class="space-y-6 pl-4">
										{#each sub.topics as topic}
											<div class="space-y-3">
												<h4 class="text-gruvbox-blue text-lg font-bold">
													✸ {topic.name}
												</h4>

												<ul class="space-y-2 border-l border-gruvbox-gray pl-6">
													{#each topic.books as book}
														<li class="group flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
															<span
																class="group-hover:text-gruvbox-aqua cursor-default text-gruvbox-fg transition-colors"
															>
																{book.title}
															</span>
															<span class="text-gruvbox-fg-soft text-xs italic opacity-60">
																by {book.author}
															</span>
														</li>
													{/each}
												</ul>
											</div>
										{/each}
									</div>
								</div>
							{/each}
						</div>
					</section>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.text-gruvbox-yellow {
		color: #d79921;
	}
	.text-gruvbox-blue {
		color: #83a598;
	}
</style>
