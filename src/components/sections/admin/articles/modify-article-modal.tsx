"use client";

import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { z } from "zod";
import { Article } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useState, useTransition } from "react";
import { DialogModalWrapper } from "@/components/shared/modal-wrapper";
import { ArticleCreateSchema } from "@/lib/validation-schema";

const ArticleEditSchema = ArticleCreateSchema.extend({
  file: z.instanceof(File).optional(),
});

type ArticleEditFormValues = z.infer<typeof ArticleEditSchema>;

export const ModifyArticleModal = ({
  onSave,
  article,
}: {
  onSave: (formData: FormData) => Promise<void>;
  article?: Article;
}) => {
  const [open, setOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  const form = useForm<ArticleEditFormValues>({
    resolver: zodResolver(article ? ArticleEditSchema : ArticleCreateSchema),
    defaultValues: {
      title: article?.title || "",
      summary: article?.summary || "",
      publishedAt: article?.publishedAt || new Date().toISOString(),
      file: undefined,
    },
  });

  const onSubmit = async (values: ArticleEditFormValues) => {
    startTransition(async () => {
      try {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("summary", values.summary);
        formData.append("publishedAt", new Date().toISOString());

        if (values.file instanceof File) {
          formData.append("file", values.file);
        }

        await onSave(formData);
        form.reset();
        setOpen(false);
      } catch (error) {
        toast.error("خطا در ذخیره مقاله.", {
          description:
            error instanceof Error ? error.message : "لطفاً دوباره تلاش کنید.",
        });
      }
    });
  };

  return (
    <DialogModalWrapper
      triggerLabel={article ? "ویرایش" : "افزودن مقاله"}
      title={article ? "ویرایش مقاله" : "افزودن مقاله"}
      isModalOpen={open}
      setModalOpen={setOpen}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>عنوان</FormLabel>
                  <FormControl>
                    <Input placeholder="عنوان مقاله" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="summary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>خلاصه</FormLabel>
                  <FormControl>
                    <Textarea placeholder="خلاصه مقاله" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {article
                      ? "تغییر فایل مقاله (اختیاری)"
                      : "فایل مقاله (PDF/DOCX)"}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".pdf,.docx"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file || undefined);
                      }}
                    />
                  </FormControl>
                  {article?.fileUrl && (
                    <p className="text-muted-foreground text-sm">
                      فایل فعلی: {article.fileUrl.split("/").pop()}
                    </p>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button">
                انصراف
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={isPending || form.formState.isSubmitting}
            >
              {(isPending || form.formState.isSubmitting) && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              ذخیره
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogModalWrapper>
  );
};
