// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
    ],
  }, {
    title: "Commands",
    href: "/commands",
    items: [
      { title: "Create", href: "/create", },
      { title: "Delete", href: "/delete" },
      { title: "Add", href: "/add", },
      { title: "Remove", href: "/remove" },
      { title: "Server", href: "/server" },
    ],
  }, {
    title: "Types",
    href: "/types",
    items: [
      { title: "Address", href: "/address" },
      { title: "Email", href: "/email" },
      { title: "Name", href: "/name" },
      { title: "Number", href: "/number" },
      { title: "Options", href: "/options" },
      { title: "Pattern", href: "/pattern" },
      { title: "Schema", href: "/schema" },
      { title: "Username", href: "/username" },
    ],
  }
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
