<script>
  import Mail from "../components/icons/Mail.svelte";
  import Phone from "../components/icons/Phone.svelte";
</script>

<div class="bg-black flex justify-end text-white space-x-3 text-xs h-8 pr-3">
  <a href="tel:970-389-7126" class="flex items-center hover:opacity-70">
    <div class="px-2">
      <Phone className="h-3 w-3" />
    </div>
    <span class="hidden sm:block">(970) 389-7126</span>
  </a>

  <a
    href="mailto:tannerb@cashbuyersco.com"
    class="flex items-center hover:opacity-70"
    title="email"
  >
    <div class="px-2">
      <Mail className="h-3 w-3" />
    </div>
    <span class="hidden sm:block">tannerb@cashbuyersco.com</span>
  </a>
</div>

<div class="relative justify-center items-center ">
  <img
    src="src/public/images/house_2.jpeg"
    alt=""
    class="h-screen object-cover md:w-screen"
  />

  <div
    class="absolute top-0 left-0 text-center bg-black bg-opacity-50 h-screen w-screen"
  />

  <div
    class="absolute text-one top-[15%] md:top-1/4 px-10 font-oswald space-y-5 items-center"
  >
    <h1 class="text-8xl font-extrabold ">Cash Buyers Colorado</h1>
    <p>
      Serving Denver Metro Area, Arvada, Highlands Ranch, Littleton, Thornton,
      Lakewood, and more
    </p>
  </div>
</div>

<div class="flex h-screen items-center justify-center bg-four">
  <div class="space-y-5 mx-5 md:mx-20">
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

<img src="src/public/images/house.jpg" alt="" class="object-contain" />
