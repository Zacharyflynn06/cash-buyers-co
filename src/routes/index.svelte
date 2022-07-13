<script>
  import Mail from "../components/icons/Mail.svelte";
  import Phone from "../components/icons/Phone.svelte";
</script>

<header
  class="bg-four flex justify-end text-one space-x-3 h-8 pr-3 font-oswald text-lg"
>
  <a href="tel:970-389-7126" class="flex items-center hover:opacity-70">
    <div class="px-2">
      <Phone className="h-4 w-4" />
    </div>
    <span>(970) 389-7126</span>
  </a>

  <a
    href="mailto:tannerb@cashbuyersco.com"
    class="flex items-center hover:opacity-70"
    title="email"
  >
    <div class="px-2">
      <Mail className="h-4 w-4" />
    </div>
    <span class="hidden sm:block">tannerb@cashbuyersco.com</span>
  </a>
</header>

<div class="relative justify-center items-center ">
  <img
    src="/images/house_2.jpeg"
    alt=""
    class="h-screen object-cover md:w-screen"
  />

  <div
    class="absolute top-0 left-0 text-center bg-black bg-opacity-25 h-screen w-screen"
  />

  <div
    class="absolute text-one top-[15%] md:top-1/3 font-oswald space-y-5 items-center mx-5 md:mx-10 lg:mx-20"
  >
    <h1 class="text-8xl font-extrabold ">Cash Buyers CO</h1>
    <p>
      Serving Denver Metro Area, Arvada, Highlands Ranch, Littleton, Thornton,
      Lakewood, and more
    </p>
  </div>
</div>

<div class="flex py-20 items-center justify-center bg-four">
  <div class="space-y-5 mx-5 md:mx-10 lg:mx-20">
    <h1 class="font-oswald font-bold text-2xl text-one">Our Mission</h1>
    <p class="text-one font-oswald text-lg ">
      At Cash Buyers Co, we strive to get our sellers the fastest and highest
      cash offer possible for their homes and properties. With a 97% closure
      rate on all offers we know we can help sellers make fast and profitable
      decisions in a market that is constantly shifting.
    </p>
    <p class="text-one font-oswald text-lg">
      Cash Buyers CO is here to help sellers close their house with a cash wire
      transfer on the day of closing. No showings, no realtor fees, and no
      inspection fees.
    </p>
    <p class="text-one font-oswald text-lg">
      We take the house in AS IS CONDITION. Meaning we decide on a number and
      you can leave the house as it is including furniture or trash items you do
      not wish to take with your on your next journey.
    </p>

    <p class="text-one font-oswald text-lg">
      Give us a call today to receive a no obligation no risk cash offer on your
      home or property!
    </p>
  </div>
</div>

<div class="h-screen relative justify-center items-center ">
  <img
    src="/images/house.jpg"
    alt=""
    class="h-screen object-cover md:w-screen"
  />
  <div
    class="absolute top-0 left-0 text-center bg-black bg-opacity-50 h-screen w-screen"
  />

  <div
    class="absolute text-one top-[40%] md:top-[35%] font-oswald space-y-10 mx-5 md:mx-10 lg:mx-20"
  >
    <p class="text-xl md:text-3xl">
      Call us today for a no risk, no obligation cash offer on your home or
      property at <a class="underline" href="tel:(970) 389-7126"
        >(970) 389-7126</a
      >.
    </p>
    <p class="text-4xl md:text-5xl font-extrabold drop-shadow-lg ">
      LET'S WIN TOGETHER!
    </p>
    <a
      href="mailto:tannerb@cashbuyersco.com"
      class="block text-2xl md:text-3xl font-extrabold underline"
      >tannerb@cashbuyersco.com</a
    >
  </div>
</div>
