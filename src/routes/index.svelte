<script>
  import Mail from "../components/icons/Mail.svelte";
  import Phone from "../components/icons/Phone.svelte";
</script>

<div class="bg-four flex justify-end text-one space-x-3 text-xs h-8 pr-3">
  <div class="flex items-center hover:opacity-70">
    <div class="px-2">
      <Phone className="h-3 w-3" />
    </div>
    <span>(970) 389-7126</span>
  </div>

  <a
    href="mailto:zacharyflynn06@gmail.com"
    class="flex items-center hover:opacity-70"
    title="email"
  >
    <div class="px-2">
      <Mail className="h-3 w-3" />
    </div>
    <span>tanner@isadouch.com</span>
  </a>
</div>
<div class="relative h-screen w-screen justify-center items-center">
  <img src="src/public/images/house.jpg" alt="" class="object-contain" />
  <h1
    class="absolute top-24 right-1/2 translate-x-1/2 text-7xl font-bold font-oswald text-one "
  >
    Cash Buyers Colorado
  </h1>
</div>
