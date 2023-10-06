

export function NavBar(){

  return (
    <nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
        <a href="#" class="text-white text-xl font-semibold">Connecting the dots</a>

        <ul class="flex space-x-6">
            <li>
                <a href="/customer" class="text-white hover:text-blue-300">Customer</a>
            </li>
            <li>
                <a href="/carrier" class="text-white hover:text-blue-300">Carrier</a>
            </li>
        </ul>
    </div>
</nav>
  )
}