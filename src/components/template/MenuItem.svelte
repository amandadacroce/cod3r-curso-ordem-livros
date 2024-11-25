<script>
    export let href = "/";
    export let texto = "";
</script>

<li>
    <a
        {href}
        class="
        flex gap-2 items-center
        cursor-pointer px-4 py-2
        hover:underline hover:text-white text-zinc-300 hover:bg-white/10"
    >
        <slot></slot>
        <span>{texto}</span>
    </a>
</li>
