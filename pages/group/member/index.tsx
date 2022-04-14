import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HeadTag } from "@components/Layout/Head";
import { MemberList } from "@components/Group/MemberList";
import { GroupLayout } from "@/src/components/Layout/GroupLayout";


export default function Home() {
  const { t } = useTranslation();
  const router = useRouter();

  const [value, setValue] = useState(0);

  useEffect(() => {
    // fetchMyAPI();
  }, []);
  return (
    <>
      <HeadTag />
      <GroupLayout><div className="post-container w-[700px] mx-auto">
            <MemberList t={t} />
          </div></GroupLayout>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "group"])),
      // Will be passed to the page component as props
    },
  };
}
