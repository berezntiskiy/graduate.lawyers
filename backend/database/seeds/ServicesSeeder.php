<?php

use Illuminate\Database\Seeder;

class ServicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        function get_in_translate_to_en($string, $gost = false)
        {
            if ($gost) {
                $replace = array("А" => "A", "а" => "a", "Б" => "B", "б" => "b", "В" => "V", "в" => "v", "Г" => "G", "г" => "g", "Д" => "D", "д" => "d",
                    "Е" => "E", "е" => "e", "Ё" => "E", "ё" => "e", "Ж" => "Zh", "ж" => "zh", "З" => "Z", "з" => "z", "И" => "I", "и" => "i",
                    "Й" => "I", "й" => "i", "К" => "K", "к" => "k", "Л" => "L", "л" => "l", "М" => "M", "м" => "m", "Н" => "N", "н" => "n", "О" => "O", "о" => "o",
                    "П" => "P", "п" => "p", "Р" => "R", "р" => "r", "С" => "S", "с" => "s", "Т" => "T", "т" => "t", "У" => "U", "у" => "u", "Ф" => "F", "ф" => "f",
                    "Х" => "Kh", "х" => "kh", "Ц" => "Tc", "ц" => "tc", "Ч" => "Ch", "ч" => "ch", "Ш" => "Sh", "ш" => "sh", "Щ" => "Shch", "щ" => "shch",
                    "Ы" => "Y", "ы" => "y", "Э" => "E", "э" => "e", "Ю" => "Iu", "ю" => "iu", "Я" => "Ia", "я" => "ia", "ъ" => "", "ь" => "");
            } else {
                $arStrES = array("ае", "уе", "ое", "ые", "ие", "эе", "яе", "юе", "ёе", "ее", "ье", "ъе", "ый", "ий");
                $arStrOS = array("аё", "уё", "оё", "ыё", "иё", "эё", "яё", "юё", "ёё", "её", "ьё", "ъё", "ый", "ий");
                $arStrRS = array("а$", "у$", "о$", "ы$", "и$", "э$", "я$", "ю$", "ё$", "е$", "ь$", "ъ$", "@", "@");

                $replace = array("А" => "A", "а" => "a", "Б" => "B", "б" => "b", "В" => "V", "в" => "v", "Г" => "G", "г" => "g", "Д" => "D", "д" => "d",
                    "Е" => "Ye", "е" => "e", "Ё" => "Ye", "ё" => "e", "Ж" => "Zh", "ж" => "zh", "З" => "Z", "з" => "z", "И" => "I", "и" => "i",
                    "Й" => "Y", "й" => "y", "К" => "K", "к" => "k", "Л" => "L", "л" => "l", "М" => "M", "м" => "m", "Н" => "N", "н" => "n",
                    "О" => "O", "о" => "o", "П" => "P", "п" => "p", "Р" => "R", "р" => "r", "С" => "S", "с" => "s", "Т" => "T", "т" => "t",
                    "У" => "U", "у" => "u", "Ф" => "F", "ф" => "f", "Х" => "Kh", "х" => "kh", "Ц" => "Ts", "ц" => "ts", "Ч" => "Ch", "ч" => "ch",
                    "Ш" => "Sh", "ш" => "sh", "Щ" => "Shch", "щ" => "shch", "Ъ" => "", "ъ" => "", "Ы" => "Y", "ы" => "y", "Ь" => "", "ь" => "",
                    "Э" => "E", "э" => "e", "Ю" => "Yu", "ю" => "yu", "Я" => "Ya", "я" => "ya", "@" => "y", "$" => "ye");

                $string = str_replace($arStrES, $arStrRS, $string);
                $string = str_replace($arStrOS, $arStrRS, $string);
            }

            return iconv("UTF-8", "UTF-8//IGNORE", strtr($string, $replace));
        }

        // функция превода текста с кириллицы в траскрипт
        function encodestring($st)
        {
            // Сначала заменяем "односимвольные" фонемы.
            $st = strtr($st, "абвгдеёзийклмнопрстуфхъыэ_",
                "abvgdeeziyklmnoprstufh'iei");
            $st = strtr($st, "АБВГДЕЁЗИЙКЛМНОПРСТУФХЪЫЭ_",
                "ABVGDEEZIYKLMNOPRSTUFH'IEI");
            // Затем - "многосимвольные".
            $st = strtr($st,
                array(
                    "ж" => "zh", "ц" => "ts", "ч" => "ch", "ш" => "sh",
                    "щ" => "shch", "ь" => "", "ю" => "yu", "я" => "ya",
                    "Ж" => "ZH", "Ц" => "TS", "Ч" => "CH", "Ш" => "SH",
                    "Щ" => "SHCH", "Ь" => "", "Ю" => "YU", "Я" => "YA",
                    "ї" => "i", "Ї" => "Yi", "є" => "ie", "Є" => "Ye"
                )
            );
            // Возвращаем результат.
            return $st;
        }


        $records = [
            [
                'naturalperson' => true,
                'title' => 'сопровождение деятельности по управлению недвижимостью',
                'text' => 'правовая помощь при приобретении объектов недвижимости:

разработка юридического механизма устранения проблем недвижимости:
земельных участков (межевание, определение границ, выделение, постановка на кадастровый учет, оформление прав аренды на земельные участки под здания, регистрация и снятие ипотеки, перевод земель из одной категории в другую, в т.ч. с землями сельскохозяйственного назначения;
зданий и помещений (согласование ранее произведенных перепланировок);
воздушных, морских и речных судов;
проверка юридической истории приобретаемых объектов недвижимости с целью выявления скрытых рисков для нового владельца;
структурирование сделок купли-продажи недвижимости и перевода прав на инвестиционные объекты (при необходимости с использованием судебных механизмов либо с участием зпф и spv, в т. ч. созданных в иностранных юрисдикциях, а также с использованием иностранных агентов и эскроу – счетов).
защита недвижимости от рисков поглощения (антирейдерство).

минимизация налогового бремени собственников объектов недвижимости.

сопровождение текущих операций: составление договоров по эсплуатационно-коммунальным услугам, оформление взаимоотношений с арендаторами, взыскание задолженности по аренде, выселении арендаторов, разработка полного пакета документации по арендным отношениям, в т. ч. на стадии до сдачи объекта в эксплуатацию.

ведение споров по инвестконтрактам (защита прав различных участников инвестиционной деятельности: инвесторов, соинвесторов, заказчиков).

представительство инвесторов в мкас при тпп рф и в других международных коммерческих арбитражах (в т. ч. за рубежом), а также в третейских судах.

сопровождение всех видов договоров, связанных со строительством и ремонтом:

разработки договоров генподряда и субподряда (в т. ч. по типовым формам fidic);
контроль и надзор за правильностью и своевременностью составления документации и отчетности в рамках исполнения договоров подряда;
ведение споров по неисполнению и ненадлежащему исполнению договоров подряда;
оспаривание подписанных форм кс-2 и кс-3 (в том числе при подписанных актах сверок расчетов).
обращение взыскания на воздушные, морские и речные суда, международный розыск, установление места регистрации судов, по их продаже, обременение ипотекой, составление договоров и фрахта, в т. ч. аренды судна с экипажем, включая иностранные юрисдикции.

защита интеллектуальной собственности (технологии, торговые марки, авторские права).'
            ],
            [
                'naturalperson' => true,
                'title' => 'консультирование, представительство и защита интересов физических лиц. ведение уголовных дел',
                'text' => 'консультирование и представительство в судах по делам, вытекающим из отношений в области семейного, трудового, гражданского, налогового права (включая составление налоговых деклараций и оспаривание излишне начисленных налогов), а также из административных правоотношений (в том числе по нарушениям правил дорожного движения).

сопровождение сделок с недвижимостью.

защита обвиняемых и представительство потерпевших по уголовным делам.'
            ],


            [
                'naturalperson' => false,
                'title' => 'сопровождение корпоративного управления',
                'text' => 'сопровождение текущей деятельности общества:

избрание совета директоров;
закрепление прав мажоритарных и миноритарных акционеров и участников;
организация проведений общих собраний;
составление протоколов.
разработка структуры корпоративного управления:

разработка локальных нормативных актов, защищающих интересы владельцев бизнеса от менеджмента;
разработка структуры холдингов (в т.ч. с иностранными участниками) с целью минимизации налогообложения и защиты интересов акционеров/участников;
сопровождение проведения процедур по слиянию активов (в т. ч. для защиты от недобросовестных миноритариев)и по их разделению (для защиты миноритариев);
сопровождение ведения реестров участников/акционеров, выпуска ценных бумаг;
регистрация юридических лиц всех организационно-правовых форм, подготовка и регистрация изменений в уставные документы, проведение процедуры ликвидации;
сопровождение опционных контрактов, в т. ч. по праву англии и уэльса.
ведение корпоративных споров (от разработки стратегии до ее реализации, включая представительство в судах и правоохранительных органах).

возврат активов, утраченных в результате недобросовестных действий менеджмента – уголовными и гражданско-правовыми методами.

определение величины убытков, причиненных недобросовестными действиями менеджмента, разработка и реализация механизма их взыскания (включая розыск активов за границей рф и обращение на них взыскания).

текущее юридическое обслуживание юридических лиц: консультирование, составление договоров, проверка полномочий контрагентов при заключении сделок, оформление трудовых отношений.

сопровождение взаимоотношений с правоохранительными органами:

анализ наличия в действиях менеджеров организации либо недобросовестных партнеров признаков состава преступления, инициация и сопровождение уголовного дела;
участие адвокатов в проверках, осмотрах, обысках и допросах (опросах);
представительство интересов юридических лиц – потерпевших по уголовным делам;
защита руководителей организаций и (или) собственников бизнеса от обвинения на предварительном следствии и в суде.'
            ],
            [
                'naturalperson' => false,
                'title' => 'судебная защита',
                'text' => 'оспаривание прав собственности:

защита собственника от исков конкурсных кредиторов и управляющего в случае вывода активов до введения процедуры банкротства;
возврат незаконно отчужденных активов из чужого владения.
оценка перспективы взыскания задолженностей, разработка юридической стратегии процедуры взыскания, позволяющей не только получать судебное решение, но и обеспечивающей его реальное исполнение.

третейское разбирательство:

подготовка третейских соглашений;
участие в формировании третейского суда;
представительство интересов сторон при рассмотрении дела третейским судом;
принудительное исполнение решений третейских судов.
разработка индивидуальных стратегий для реализации особо значимых (и особо сложных) проектов, в т. ч. региональных (спецпроектов1).

1 под спецпроектами понимаются ситуации, требующие нелинейных юридических решений.'
            ],

        ];


        foreach ($records as $record)
            \App\Service::create([
                'naturalperson' => $record['naturalperson'],
                'ru' => [
                    'title' => $record['title'],
                    'text' => $record['text']
                ],
                'en' => [
                    'title' => get_in_translate_to_en($record['title']),
                    'text' => get_in_translate_to_en($record['text'])
                ],
                'md' => [
                    'title' => get_in_translate_to_en($record['title']),
                    'text' => get_in_translate_to_en($record['text'])
                ],
            ]);
    }
}
