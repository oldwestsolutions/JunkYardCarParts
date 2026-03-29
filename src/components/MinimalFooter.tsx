/** Slim footer for focused content pages — white bar, blue legal line only */
export default function MinimalFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 lg:px-8">
        <p className="text-center text-sm text-blue-700 sm:text-base">
          &copy; {new Date().getFullYear()} Junkyard Car Parts. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
