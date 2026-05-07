A few days learning into TypeScript,I’d heard of OOP. I knew the four big buzzwords: 
Encapsulation, Inheritance, Polymorphism and Abstraction. 

Honestly, they sounded like boring college lecture. But out of pure desperation, I actually sat down to learn them.
Here is how I finally understood them, explained without the academic jargon.

First of all i discuss Encapsulation : Encapsulation is basically grouping your data and the functions that change that data into a single class, and putting up signs on the stuff that shouldn't be messed with from the outside. In TypeScript, we do this with private and public access modifiers.
For example in coffee machine when we press a button work as a Public Method, and coffee comes out. You don't see the grinders, the water tubes, or the heater play a role of Private Data. You don't need to see them to get your caffeine, and honestly, it's safer if you don't poke around inside while it's running!

Next comes to Inheritance : Inheritance is a concept where one class can acquire the properties and methods of another class. It helps us reuse code and create relationships between classes. In TypeScript, we use the extends keyword to achieve inheritance.
Let’s say, think about a child inheriting qualities from their parents. A child may inherit eye color, hair color, or certain behaviors from their parents. Similarly, in programming, a child class can inherit properties and methods from a parent class. The child class can also add its own unique features while still using the functionality of the parent class.

Let’s discuss Polymorphism. Polymorphism means "many forms" In programming, it allows the same method or function name to behave differently depending on the object or situation. This helps make code more flexible and reusable.
For instance, think about a remote control. You press the same power button, but it can turn on a TV, an air conditioner, or a speaker. The button is the same, but the action changes depending on the device. Similarly, in TypeScript, the same method can perform different actions based on the class or object that is using it.

Let's talk about abstraction. Abstraction means hiding complex internal details and showing the user only the important functionality. It helps us focus on what an object does instead of how it works internally. In TypeScript, we can achieve abstraction by using abstract classes and interfaces.

Think about driving a car. You use the steering wheel, brakes, and accelerator to drive the car, but you don't need to understand how the engine, transmission, or internal systems work. The complex processes are hidden from you and only the necessary controls are shown. Similarly, in programming, abstraction hides unnecessary implementation details and provides the user with only the essential features.